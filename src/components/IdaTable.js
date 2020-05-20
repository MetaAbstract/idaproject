/** @module */

import { mapActions, mapState, mapGetters } from "vuex";
import ClickOutside from "vue-click-outside";

export default {
  /**
   * модель данных
   */
  data: function() {
    /** модель данных+ */
    return {
      errorMessage: "",
      /** отмеченные продукты для удаления */
      selectedProducts: [],
      /** продукт выбранный контекстно для удаления
       * если null значит не контекстное удаление
       */
      selectedProduct: null,
      /** продукт для выбранной строки таблицы */
      selectedProductRow: null,
      /** модель для чекбокса выбрать все продукты в таблице  */
      allProductsSelected: false,
      /** объект стиля для окна подтверждения удаления */
      confirmStyle: {
        top: 0,
        right: "1em",
        position: "absolute",
        zIndex: 2,
        display: "none",
        opacity: 1,
        textAlign: "center",
        backgroundColor: "white",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.16)",
        padding: "1em"
      },
      /** объект стиля для меню выбора видимости колонок */
      selectColumnsStyle: {
        display: "none",
        position: "absolute",
        top: 0,
        left: 0,
        overflowY: "scroll",
        height: "10em"
      },
      lockScreenStyle: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightgray",
        opacity: 0.2,
        display: "none",
        zIndex: 3,
        position: "absolute",
        top: 0,
        left: 0
      },
      /** модель для чекбоков выбранных колонок в меню выбора видимости
       * all выбрать все колонки
       */
      showColumns: {
        all: true,
        product: true,
        calories: true,
        fat: true,
        carbs: true,
        protein: true,
        iron: true
      }
    };
  },
  /** хук для загрузки данных с имитации api */
  created() {
    this.getProducts();
  },
  /** METHODS */
  methods: {
    /** маппинг акшенов хранилища */
    ...mapActions({
      /** загрузка данных с api  */
      getProducts: "getProducts"
    }),
    /**
     * сортирует продукты через мутацию
     * @fieldName string имя поля для сортировки
     */
    sortProducts: function(fieldName) {
      this.$store.commit("sortProducts", fieldName);
    },
    /**
     * меняет количество продуктов на странице
     */
    setProductsPerPage: function(event) {
      let newProductsPerPage = Number(event.target.value);
      //учтем позицию пользователя текущую
      //в новом разделении по страницам
      //первый продукт должен остаться на текущей странице
      let firstProduct = this.getProductsPage[0];
      let indexOfFirstProduct = this.products.findIndex(
        x => x.id == firstProduct.id
      );
      let newCurrentPage;
      let rest = (indexOfFirstProduct + 1) % newProductsPerPage;
      if (indexOfFirstProduct + 1 < newProductsPerPage) {
        newCurrentPage = 1;
      } else if (rest == 0) {
        newCurrentPage = (indexOfFirstProduct + 1) / newProductsPerPage;
      } else {
        newCurrentPage =
          (indexOfFirstProduct - rest + 1) / newProductsPerPage + 1;
      }
      let payload = {
        productsPerPage: newProductsPerPage,
        currentPage: newCurrentPage
      };
      this.$store.commit("setProductsPerPage", payload);
    },
    /** переход на следующую страницу с данными */
    nextPage: function() {
      if (this.currentPage === this.pageCount) {
        return;
      }
      this.$store.commit("nextPage");
      //очистим выбранные продукты
      this.selectedProducts = [];
      this.allProductsSelected = false;
    },
    /** переход на предидущую страницу с данными */
    previosPage: function() {
      if (this.currentPage <= 1) {
        //может и ноль быть
        return;
      }
      this.$store.commit("previosPage");
      //очистим выбранные продукты
      this.selectedProducts = [];
      this.allProductsSelected = false;
    },
    /** выбрать все продукты на странице */
    selectAllProductsOnPage: function() {
      if (this.allProductsSelected) {
        this.selectedProducts = this.getProductsPage;
      } else {
        this.selectedProducts = [];
      }
    },
    /** удалить выбранные продукты */
    deleteProducts: function() {
      if (this.selectedProducts.length == 0) {
        return;
      }
      this.lockScreenStyle.display = "block";
      this.$store.dispatch("deleteProductsAPI", this.selectedProducts);
    },
    /** открывает окно подтверждения для контекстного удаления продукта */
    deleteProductConfirmWindow: function(params) {
      this.selectedProduct = params.product;
      //console.log(params.event.srcElement.getBoundingClientRect());
      //let x = params.event.srcElement.getBoundingClientRect().x + pageYOffset;
      let y = params.event.srcElement.getBoundingClientRect().y + pageYOffset;
      //let width = params.event.srcElement.getBoundingClientRect().width;
      let height = params.event.srcElement.getBoundingClientRect().height;
      //console.log([x, y, width, height]);
      //console.log(params.product);
      this.confirmStyle.display = "inline-block";
      this.confirmStyle.top = y + height + "px";
      //this.confirmStyle.right = "calc(100vw - " + (x + width) + "px)";
      //this.confirmStyle.right = "calc(100vw " + (x + width) + "px - 2rem)";
      this.confirmStyle.right = "3em";
      //requied by popup click outside module
      this.popupItem = this.$refs.confirm;
      //popup outside click additional control
      if (this.selectColumnsStyle.display == "inline-block") {
        this.selectColumnsStyle.display = "none";
      }
    },
    /** отмена подтверждения контекстного удаления продукта  */
    deleteProductCancel: function() {
      this.confirmStyle.display = "none";
      this.selectedProduct = null;
    },
    /** подтверждение удаления выбранного продукта */
    deleteProductConfirm: function() {
      this.lockScreenStyle.display = "block";
      this.$store.dispatch("deleteProductsAPI", [this.selectedProduct]);
      //дальше через watch на deleteTransactionFlag отрабатываем
    },
    /** отработка чекбокса выбрать все колонки */
    showAllColumnsChanged: function() {
      if (this.showColumns.all) {
        this.showColumns.product = true;
        this.showColumns.calories = true;
        this.showColumns.fat = true;
        this.showColumns.carbs = true;
        this.showColumns.protein = true;
        this.showColumns.iron = true;
      }
    },
    /** обратная отработка чекбокса выбрать все колокни от выбранных колонок */
    showHideColumn: function() {
      if (
        this.showColumns.product &&
        this.showColumns.calories &&
        this.showColumns.fat &&
        this.showColumns.carbs &&
        this.showColumns.protein &&
        this.showColumns.iron
      ) {
        this.showColumns.all = true;
      } else {
        this.showColumns.all = false;
      }
    },
    /** открывает меню выбора видимых колонок */
    showHideColumnsSelection: function(event) {
      if (this.selectColumnsStyle.display == "inline-block") {
        this.selectColumnsStyle.display = "none";
      } else {
        let x = event.srcElement.getBoundingClientRect().x + pageYOffset;
        let y = event.srcElement.getBoundingClientRect().y + pageYOffset;
        //let width = event.srcElement.getBoundingClientRect().width;
        let height = event.srcElement.getBoundingClientRect().height;
        this.selectColumnsStyle.top = "calc(" + (y + height) + "px + 1rem)";
        this.selectColumnsStyle.left = "calc(" + x + "px - 3rem)";
        this.selectColumnsStyle.display = "inline-block";
        //requied by popup click outside module
        this.popupItem = this.$refs.select_columns;
        //popup outside click additional control
        this.confirmStyle.display = "none";
      }
    },
    /** скрывает меню выбора видимых колонок */
    HideColumnsSelection: function() {
      this.selectColumnsStyle.display = "none";
    },
    /** возвращает css class object для лейблов отражающих текущую колонку сортировки
     * @param {string} fieldName имя поля
     */
    columnSortedLabelCSS: function(fieldName) {
      if (this.sortField === fieldName) {
        return { "column-sorted": true };
      } else {
        return { "column-sorted": false };
      }
    },
    /** возвращает css class object для заголовка колонки
     * в зависимости от  того есть по ней сортировка или нет
     * @param {string} fieldName имя поля для проверки
     */
    columnSortedTableCSS: function(fieldName) {
      if (this.sortField === fieldName) {
        return { "column-sorted-table": true };
      } else {
        return { "column-sorted-table": false };
      }
    },
    /** возвращает символ направления сортировки или пустую строку по имени поля
     * в зависимости от имени поля
     *  @param {string} fieldName имя поля для проверки
     */
    columnSortDirection: function(fieldName) {
      if (this.sortField === fieldName) {
        if (this.sortDirection === "asc") {
          return " &uarr;";
        } else {
          return " &darr;";
        }
      } else {
        return "";
      }
    },
    /** предикат выбран ли продукт
     * @param {object} product продкут для проверки
     */
    productSelected: function(product) {
      let productFounded = false;
      this.selectedProducts.forEach(element => {
        if (element.id === product.id) {
          productFounded = true;
        }
      });
      return productFounded;
    },
    /** уставливает | сбрасывает продукт соответсвующий колонке по клику  */
    selectRow: function(product) {
      if (this.selectedProductRow === null) {
        //никакая строка не выбрана
        this.selectedProductRow = product;
      } else {
        if (this.selectedProductRow.id !== product.id) {
          //выбрана другая строка
          this.selectedProductRow = product;
        } else {
          //сбросим выделение
          this.selectedProductRow = null;
        }
      }
    },
    rowSelected: function(product) {
      if (this.selectedProductRow === null) {
        return false;
      } else {
        if (this.selectedProductRow.id !== product.id) {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  /** COMPUTED */
  computed: {
    /** маппинг состояния из хранилища */
    ...mapState({
      dataLoaded: "dataLoaded",
      products: "products",
      productsPerPage: "productsPerPage",
      currentPage: "currentPage",
      sortField: "sortField",
      sortDirection: "sortDirection",
      deleteTransactionFlag: "deleteTransactionFlag",
      deleteTransactionSucсessFlag: "deleteTransactionSucсessFlag"
    }),
    /** маппинг геттеров из хранилища */
    ...mapGetters({
      pageCount: "pageCount"
    }),
    /** получает массив продуктов для текущей страницу */
    getProductsPage: function() {
      let productsPerPage = this.productsPerPage;
      let startIndex = (this.currentPage - 1) * productsPerPage;
      let endIndex = this.currentPage * productsPerPage - 1;
      if (endIndex > this.products.length - 1) {
        endIndex = this.products.length - 1;
      }
      return this.products.slice(startIndex, endIndex + 1);
    },
    /** считает количество выбранных колонок для показа */
    columnsSelectedCount: function() {
      let counter = 0;
      for (const key in this.showColumns) {
        if (key !== "all") {
          if (this.showColumns[key]) {
            counter++;
          }
        }
      }
      return counter;
    },
    /** предикат проверающий все ли продуктв на странице выбраны
     *  чтобы правильно работал чекбокс выбрать все при отмене выбора какого либо продукта
     */
    allProductsSelectedCheck: function() {
      // тупо по количеству проверим
      if (this.selectedProducts.length === this.getProductsPage.length) {
        this.allProductsSelected = true; //установим модель чекбокса
        return true;
      } else {
        this.allProductsSelected = false; //сбросим модель чекбокса
        return false;
      }
    }
  },
  watch: {
    /** ловит событие завершения транзакции удаления при уставновке в false
     *  надо было асинхронный экшен сделать, но тоже прикольно работает.
     */
    deleteTransactionFlag: function(newValue) {
      // отрабатываем только когда сбрасывается в false
      if (!newValue) {
        if (this.deleteTransactionSucсessFlag) {
          //транзакция успешна
          if (this.selectedProduct === null) {
            //удаление выбранных продуктов
            //транзакция успешна удаляем выбранные продукты
            this.selectedProducts = [];
          } else {
            //удаление контекстно выбранного продукта
            //проверим есть ли он в выбранных и удалим
            let indexInSelected = this.selectedProducts.findIndex(
              x => x.id === this.selectedProduct.id
            );
            if (indexInSelected !== -1) {
              this.selectedProducts.splice(indexInSelected, 1);
            }
            this.confirmStyle.display = "none";
            this.selectedProduct = null;
          }
          //вернем флаг успеха транзакции в исходное состояние
          this.$store.commit("setDeleteTransactionSucсessFlag", false);
          this.errorMessage = "";
        } else {
          // транзакция не прошла
          this.errorMessage = "ERROR DELETE API";
        }
        this.lockScreenStyle.display = "none";
      }
    }
  },
  /** директива для плагина скрытия менюшек при клике снаружи элемента */
  directives: {
    ClickOutside
  }
};
