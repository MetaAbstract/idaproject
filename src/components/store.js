/**
 * @module
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as api from "./request";

/**
 * store configuration
 */
let storeConfig = {
  strict: true,
  /**  global state  */
  state: {
    /** данные успешно загружен */
    dataLoaded: false,
    /**  массиы всех продуктов */
    products: [],
    /** количество продуктов на странице */
    productsPerPage: 10,
    /** текущая страница */
    currentPage: 1,
    /** поле по которому отсортированы продукты */
    sortField: "product", //product || ....
    /** направление сорировки asc || desc */
    sortDirection: "asc", // asc || desc
    /** флаг тразнакции на удаление продуктов
     * процесс асинхронный true транзакция идет, false не идет
     */
    deleteTransactionFlag: false,
    /** флаг успешного завершения транзакции удаления */
    deleteTransactionSucсessFlag: false
  },
  /** мутации */
  mutations: {
    /** установить масив продуктов */
    setProducts(state, products) {
      state.products = products;
      state.sortDirection = "desc"; //will be asc. sorting change direction
      state.sortField = "product";
    },
    /** установить флаг того, что продуктв загружены */
    setDataLoaded(state, requestResult) {
      state.dataLoaded = requestResult;
    },
    /** осротировать продукты по полю
     * @param {string} fieldName - имя поля для сортировки
     */
    sortProducts(state, fieldName) {
      if (fieldName === state.sortField) {
        if (state.sortDirection === "asc") {
          state.sortDirection = "desc";
        } else {
          state.sortDirection = "asc";
        }
      } else {
        state.sortDirection = "asc";
        state.sortField = fieldName;
      }
      if (state.sortDirection === "asc") {
        state.products.sort((a, b) => {
          if (a[fieldName] < b[fieldName]) {
            return -1;
          }
          if (a[fieldName] > b[fieldName]) {
            return 1;
          }
          return 0;
        });
      } else {
        state.products.sort((a, b) => {
          if (a[fieldName] > b[fieldName]) {
            return -1;
          }
          if (a[fieldName] < b[fieldName]) {
            return 1;
          }
          return 0;
        });
      }
    },
    /** установить количество продуктов на страинце */
    setProductsPerPage(state, params) {
      state.productsPerPage = params.productsPerPage;
      state.currentPage = params.currentPage;
    },
    /** следующая страница */
    nextPage: function(state) {
      state.currentPage++;
    },
    /** предидущая страница */
    previosPage: function(state) {
      state.currentPage--;
    },
    /** признак осуществления транзакции на удаление
     * @param {boolean} flag true транзакция идет, false не идет
     * если идет транзакция удаления - другие транзакции интерфейс не запускает
     */
    setDeleteTransactionFlag(state, flag) {
      state.deleteTransactionFlag = flag;
    },
    /** флаг успеха транзакции удаления */
    setDeleteTransactionSucсessFlag(state, flag) {
      state.deleteTransactionSucсessFlag = flag;
    },
    /** удалить выбранные продукты
     * @param products {Array} массив продкутов для удаления
     */
    deleteProducts(state, products) {
      products.forEach(element => {
        let index = state.products.findIndex(x => x.id == element.id);
        state.products.splice(index, 1);
      });
      //при удалении количество страниц может уменьшиться
      // и текущая перестать существовать
      if (this.getters.pageCount < state.currentPage) {
        state.currentPage = this.getters.pageCount;
      }
    }
  },
  /** GETTERS */
  getters: {
    /** считает общеее количество страниц для пейджинга  */
    pageCount: state => {
      let size = state.products.length;
      let rest = size % state.productsPerPage;
      if (rest > 0) {
        return (size - rest) / state.productsPerPage + 1;
      } else {
        return size / state.productsPerPage;
      }
    }
  },
  /** ACTIONS */
  actions: {
    /**
     * загружает продкты через имитацию апи
     */
    getProducts(context) {
      api
        .getProducts()
        .then(result => {
          context.commit("setProducts", result);
          context.commit("sortProducts", "product");
          context.commit("setDataLoaded", true);
        })
        .catch(() => {
          // console.error(
          //   "store.actions.getproducts: getProducts errore" +
          //     JSON.stringify(error)
          // );
          context.commit("setDataLoaded", false);
          context.commit("setProducts", []);
        });
    },
    /** удаляет продукты */
    deleteProductsAPI(context, products) {
      context.commit("setDeleteTransactionFlag", true);
      api
        .deleteProducts()
        .then(() => {
          context.commit("deleteProducts", products);
          context.commit("setDeleteTransactionSucсessFlag", true);
          context.commit("setDeleteTransactionFlag", false);
        })
        .catch(() => {
          context.commit("setDeleteTransactionSucсessFlag", false);
          context.commit("setDeleteTransactionFlag", false);
        });
    }
  }
};

export default new Vuex.Store(storeConfig);
