<template>
  <div class="idatable">
    <!-- ошибка загрузки данных-->
    <div v-if="!dataLoaded" style="text-align:center;">
      <div :style="{ fontWeigt: 'bold', color: 'red' }">DATA LOAD ERROR</div>
      <button v-on:click="getProducts" class="control-colored">
        Reload data
      </button>
    </div>
    <!-- данные загружены успешно -->
    <div v-if="dataLoaded">
      <h1>Table UI</h1>
      <div
        style="height:1px;background-color:#EDEDED;margin-bottom:16px;"
      ></div>
      <div>
        <div style="float:left;display:inline-block">
          <span class="panel bold">Soring by:</span>
          <span class="panel" :class="columnSortedLabelCSS('product')"
            >Product (100g serving)
          </span>
          <span class="panel" :class="columnSortedLabelCSS('calories')"
            >Calories</span
          >
          <span class="panel" :class="columnSortedLabelCSS('fat')">Fat(g)</span>
          <span class="panel" :class="columnSortedLabelCSS('carbs')"
            >Carbs (g)</span
          >
          <span class="panel" :class="columnSortedLabelCSS('protein')"
            >Protein (g)</span
          >
          <span class="panel" :class="columnSortedLabelCSS('iron')"
            >Iron(%)</span
          >
        </div>
        <div style="float:right; display:inline-block">
          <!-- :style="{ 'min-width': '86px' } ширина меняется когда выделется больше 10 элементов
          и интерйфейс скачет -->
          <button
            class="panel"
            :class="{
              control: selectedProducts.length == 0,
              'control-colored': selectedProducts.length > 0
            }"
            value="Delete"
            :style="{ 'min-width': '86px' }"
            v-on:click="deleteProducts()"
            v-bind:disabled="selectedProducts.length == 0"
          >
            Delete ({{ selectedProducts.length }})
          </button>
          <select
            class="panel control"
            v-on:change="setProductsPerPage($event)"
            :style="{ fontSize: '14px' }"
          >
            <option value="10" selected>10 PerPage</option>
            <option value="15">15 PerPage</option>
            <option value="20">20 PerPage</option>
          </select>
          <img
            class="panel control"
            src="left.png"
            alt="&lt;-"
            :style="{
              margin: '0 0 0 5px',
              padding: 0,
              width: '23px',
              height: 'auto',
              opacity: currentPage == 1 ? 0.3 : 1
            }"
            v-on:click="previosPage"
          />
          <span class="panel"
            >{{ currentPage }}-{{ pageCount }} of {{ products.length }}</span
          >
          <img
            class="panel control"
            src="right.png"
            alt="-&gt;"
            :style="{
              margin: '0 0 0 5px',
              padding: 0,
              width: '23px',
              height: 'auto',
              opacity: currentPage == pageCount ? 0.3 : 1
            }"
            v-on:click="nextPage"
          />
          <button
            class="panel control"
            v-on:click.stop="showHideColumnsSelection($event)"
          >
            {{ columnsSelectedCount }} columns selected &blacktriangledown;
          </button>
        </div>
      </div>
      <!-- выбор видимых колонок -->
      <div
        v-click-outside="HideColumnsSelection"
        class="select-columns"
        v-bind:style="selectColumnsStyle"
        ref="select_columns"
      >
        <ul>
          <li>
            <label class="checkbox bold" :class="{ checked: showColumns.all }">
              <input
                type="checkbox"
                v-model="showColumns.all"
                v-on:change="showAllColumnsChanged()"
              />
              All
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.product }">
              <input
                type="checkbox"
                v-model="showColumns.product"
                v-on:change="showHideColumn()"
              />
              Product (100g serving)
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.calories }">
              <input
                type="checkbox"
                v-model="showColumns.calories"
                v-on:change="showHideColumn()"
              />
              Calories
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.fat }">
              <input
                type="checkbox"
                v-model="showColumns.fat"
                v-on:change="showHideColumn()"
              />
              Fat(g)
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.carbs }">
              <input
                type="checkbox"
                v-model="showColumns.carbs"
                v-on:change="showHideColumn()"
              />
              Carbs
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.protein }">
              <input
                type="checkbox"
                v-model="showColumns.protein"
                v-on:change="showHideColumn()"
              />
              Protein
            </label>
          </li>
          <li>
            <label class="checkbox" :class="{ checked: showColumns.iron }">
              <input
                type="checkbox"
                v-model="showColumns.iron"
                v-on:change="showHideColumn()"
              />
              Iron
            </label>
          </li>
        </ul>
      </div>
      <div
        class="panel"
        :style="{
          fontWeigt: 'bold',
          color: 'red',
          clear: 'both',
          textAlign: 'center'
        }"
      >
        {{ errorMessage }}
      </div>
      <!-- таблица с данными -->
      <table>
        <thead>
          <tr>
            <th>
              <label
                class="checkbox"
                :class="{ checked: allProductsSelectedCheck }"
              >
                <input
                  type="checkbox"
                  v-on:change="selectAllProductsOnPage()"
                  v-model="allProductsSelected"
                />
              </label>
            </th>
            <th
              value="Product"
              v-show="showColumns.product"
              v-on:click="sortProducts('product')"
            >
              <span :class="columnSortedTableCSS('product')">
                Product (100g serving)</span
              >
              <span v-html="columnSortDirection('product')"></span>
            </th>
            <th
              value="Calories"
              v-show="showColumns.calories"
              v-on:click="sortProducts('calories')"
            >
              <span :class="columnSortedTableCSS('calories')">Calories</span>
              <span v-html="columnSortDirection('calories')"></span>
            </th>
            <th
              value="Fat"
              v-show="showColumns.fat"
              v-on:click="sortProducts('fat')"
            >
              <span :class="columnSortedTableCSS('fat')">Fat (g)</span>
              <span v-html="columnSortDirection('fat')"></span>
            </th>
            <th
              value="Carbs (g)"
              v-show="showColumns.carbs"
              v-on:click="sortProducts('carbs')"
            >
              <span :class="columnSortedTableCSS('carbs')">Carbs (g)</span>
              <span v-html="columnSortDirection('carbs')"></span>
            </th>
            <th
              value="Protein (g)"
              v-show="showColumns.protein"
              v-on:click="sortProducts('protein')"
            >
              <span :class="columnSortedTableCSS('protein')">Protein (g)</span>
              <span v-html="columnSortDirection('protein')"></span>
            </th>
            <th
              value="Iron(%)"
              v-show="showColumns.iron"
              v-on:click="sortProducts('iron')"
            >
              <span :class="columnSortedTableCSS('iron')">Iron(%)</span>
              <span v-html="columnSortDirection('iron')"></span>
            </th>
            <th value="Delete"></th>
          </tr>
        </thead>
        <!-- тело таблицы -->
        <tbody>
          <tr
            v-for="product in getProductsPage"
            v-bind:key="product.id"
            @click="selectRow(product)"
            :class="{ 'row-selected': rowSelected(product) }"
          >
            <td>
              <label
                class="checkbox"
                :class="{ checked: productSelected(product) }"
              >
                <!-- v-bind:value="product" значение передаваемое в модель -->
                <input
                  type="checkbox"
                  v-bind:value="product"
                  v-model="selectedProducts"
                />
              </label>
            </td>
            <td v-show="showColumns.product">{{ product.product }}</td>
            <td v-show="showColumns.calories">{{ product.calories }}</td>
            <td v-show="showColumns.fat">{{ product.fat }}</td>
            <td v-show="showColumns.carbs">{{ product.carbs }}</td>
            <td v-show="showColumns.protein">{{ product.protein }}</td>
            <td v-show="showColumns.iron">{{ product.iron }}</td>
            <!-- .stop for catching click on non clicking element -->
            <td :style="{ width: '70px' }">
              <span
                v-on:click.stop="
                  deleteProductConfirmWindow({
                    event: $event,
                    product: product
                  })
                "
                :style="{
                  display: rowSelected(product) ? 'inline' : 'none'
                }"
              >
                <img
                  :src="require('@/components/trash.png')"
                  style="vertical-align:middle"
                  alt="Delete"
                />delete
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- окно подтверждения контекстного удаления продукта -->

      <div
        v-click-outside="deleteProductCancel"
        ref="confirm"
        v-bind:style="confirmStyle"
      >
        Are you shure you whant to
        <span class="bold">delete item</span>?<br />
        <button
          v-on:click="deleteProductCancel"
          class="control panel"
          style="margin: 1em 0em 2em 1em;"
        >
          Cancel
        </button>
        <button
          v-on:click="deleteProductConfirm"
          class="control-colored panel"
          style="margin: 0em 1em 1em 2em;"
        >
          Confirm
        </button>
      </div>
      <!--{{ selectedProducts }}-->
    </div>
    <div :style="lockScreenStyle">lock</div>
  </div>
</template>

<script src="./IdaTable.js"></script>

<style src="./IdaTable.css"></style>
