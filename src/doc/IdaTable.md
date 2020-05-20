<a name="module_IdaTable"></a>

## IdaTable

* [IdaTable](#module_IdaTable)
    * _static_
        * [.methods](#module_IdaTable.methods)
            * [.sortProducts()](#module_IdaTable.methods.sortProducts)
            * [.setProductsPerPage()](#module_IdaTable.methods.setProductsPerPage)
            * [.nextPage()](#module_IdaTable.methods.nextPage)
            * [.previosPage()](#module_IdaTable.methods.previosPage)
            * [.selectAllProductsOnPage()](#module_IdaTable.methods.selectAllProductsOnPage)
            * [.deleteProducts()](#module_IdaTable.methods.deleteProducts)
            * [.deleteProductConfirmWindow()](#module_IdaTable.methods.deleteProductConfirmWindow)
            * [.deleteProductCancel()](#module_IdaTable.methods.deleteProductCancel)
            * [.deleteProductConfirm()](#module_IdaTable.methods.deleteProductConfirm)
            * [.showAllColumnsChanged()](#module_IdaTable.methods.showAllColumnsChanged)
            * [.showHideColumn()](#module_IdaTable.methods.showHideColumn)
            * [.showHideColumnsSelection()](#module_IdaTable.methods.showHideColumnsSelection)
            * [.HideColumnsSelection()](#module_IdaTable.methods.HideColumnsSelection)
            * [.columnSortedLabelCSS(fieldName)](#module_IdaTable.methods.columnSortedLabelCSS)
            * [.columnSortedTableCSS(fieldName)](#module_IdaTable.methods.columnSortedTableCSS)
            * [.columnSortDirection(fieldName)](#module_IdaTable.methods.columnSortDirection)
            * [.productSelected(product)](#module_IdaTable.methods.productSelected)
            * [.selectRow()](#module_IdaTable.methods.selectRow)
        * [.computed](#module_IdaTable.computed)
            * [.getProductsPage()](#module_IdaTable.computed.getProductsPage)
            * [.columnsSelectedCount()](#module_IdaTable.computed.columnsSelectedCount)
            * [.allProductsSelectedCheck()](#module_IdaTable.computed.allProductsSelectedCheck)
        * [.directives](#module_IdaTable.directives)
        * [.data()](#module_IdaTable.data)
        * [.created()](#module_IdaTable.created)
    * _inner_
        * [~selectedProducts](#module_IdaTable..selectedProducts)
        * [~selectedProduct](#module_IdaTable..selectedProduct)
        * [~selectedProductRow](#module_IdaTable..selectedProductRow)
        * [~allProductsSelected](#module_IdaTable..allProductsSelected)
        * [~confirmStyle](#module_IdaTable..confirmStyle)
        * [~selectColumnsStyle](#module_IdaTable..selectColumnsStyle)
        * [~showColumns](#module_IdaTable..showColumns)
        * [~getProducts](#module_IdaTable..getProducts)


* * *

<a name="module_IdaTable.methods"></a>

### IdaTable.methods
METHODS

**Kind**: static property of [<code>IdaTable</code>](#module_IdaTable)  

* [.methods](#module_IdaTable.methods)
    * [.sortProducts()](#module_IdaTable.methods.sortProducts)
    * [.setProductsPerPage()](#module_IdaTable.methods.setProductsPerPage)
    * [.nextPage()](#module_IdaTable.methods.nextPage)
    * [.previosPage()](#module_IdaTable.methods.previosPage)
    * [.selectAllProductsOnPage()](#module_IdaTable.methods.selectAllProductsOnPage)
    * [.deleteProducts()](#module_IdaTable.methods.deleteProducts)
    * [.deleteProductConfirmWindow()](#module_IdaTable.methods.deleteProductConfirmWindow)
    * [.deleteProductCancel()](#module_IdaTable.methods.deleteProductCancel)
    * [.deleteProductConfirm()](#module_IdaTable.methods.deleteProductConfirm)
    * [.showAllColumnsChanged()](#module_IdaTable.methods.showAllColumnsChanged)
    * [.showHideColumn()](#module_IdaTable.methods.showHideColumn)
    * [.showHideColumnsSelection()](#module_IdaTable.methods.showHideColumnsSelection)
    * [.HideColumnsSelection()](#module_IdaTable.methods.HideColumnsSelection)
    * [.columnSortedLabelCSS(fieldName)](#module_IdaTable.methods.columnSortedLabelCSS)
    * [.columnSortedTableCSS(fieldName)](#module_IdaTable.methods.columnSortedTableCSS)
    * [.columnSortDirection(fieldName)](#module_IdaTable.methods.columnSortDirection)
    * [.productSelected(product)](#module_IdaTable.methods.productSelected)
    * [.selectRow()](#module_IdaTable.methods.selectRow)


* * *

<a name="module_IdaTable.methods.sortProducts"></a>

#### methods.sortProducts()
сортирует продукты через мутацию

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  
**Fieldname**: string имя поля для сортировки  

* * *

<a name="module_IdaTable.methods.setProductsPerPage"></a>

#### methods.setProductsPerPage()
меняет количество продуктов на странице

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.nextPage"></a>

#### methods.nextPage()
переход на следующую страницу с данными

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.previosPage"></a>

#### methods.previosPage()
переход на предидущую страницу с данными

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.selectAllProductsOnPage"></a>

#### methods.selectAllProductsOnPage()
выбрать все продукты на странице

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.deleteProducts"></a>

#### methods.deleteProducts()
удалить выбранные продукты

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.deleteProductConfirmWindow"></a>

#### methods.deleteProductConfirmWindow()
открывает окно подтверждения для контекстного удаления продукта

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.deleteProductCancel"></a>

#### methods.deleteProductCancel()
отмена подтверждения контекстного удаления продукта

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.deleteProductConfirm"></a>

#### methods.deleteProductConfirm()
подтверждение удаления выбранного продукта

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.showAllColumnsChanged"></a>

#### methods.showAllColumnsChanged()
отработка чекбокса выбрать все колонки

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.showHideColumn"></a>

#### methods.showHideColumn()
обратная отработка чекбокса выбрать все колокни от выбранных колонок

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.showHideColumnsSelection"></a>

#### methods.showHideColumnsSelection()
открывает меню выбора видимых колонок

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.HideColumnsSelection"></a>

#### methods.HideColumnsSelection()
скрывает меню выбора видимых колонок

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.methods.columnSortedLabelCSS"></a>

#### methods.columnSortedLabelCSS(fieldName)
возвращает css class object для лейблов отражающих текущую колонку сортировки

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | имя поля |


* * *

<a name="module_IdaTable.methods.columnSortedTableCSS"></a>

#### methods.columnSortedTableCSS(fieldName)
возвращает css class object для заголовка колонки
в зависимости от  того есть по ней сортировка или нет

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | имя поля для проверки |


* * *

<a name="module_IdaTable.methods.columnSortDirection"></a>

#### methods.columnSortDirection(fieldName)
возвращает символ направления сортировки или пустую строку по имени поля
в зависимости от имени поля

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | имя поля для проверки |


* * *

<a name="module_IdaTable.methods.productSelected"></a>

#### methods.productSelected(product)
предикат выбран ли продукт

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

| Param | Type | Description |
| --- | --- | --- |
| product | <code>object</code> | продкут для проверки |


* * *

<a name="module_IdaTable.methods.selectRow"></a>

#### methods.selectRow()
уставливает | сбрасывает продукт соответсвующий колонке по клику

**Kind**: static method of [<code>methods</code>](#module_IdaTable.methods)  

* * *

<a name="module_IdaTable.computed"></a>

### IdaTable.computed
COMPUTED

**Kind**: static property of [<code>IdaTable</code>](#module_IdaTable)  

* [.computed](#module_IdaTable.computed)
    * [.getProductsPage()](#module_IdaTable.computed.getProductsPage)
    * [.columnsSelectedCount()](#module_IdaTable.computed.columnsSelectedCount)
    * [.allProductsSelectedCheck()](#module_IdaTable.computed.allProductsSelectedCheck)


* * *

<a name="module_IdaTable.computed.getProductsPage"></a>

#### computed.getProductsPage()
получает массив продуктов для текущей страницу

**Kind**: static method of [<code>computed</code>](#module_IdaTable.computed)  

* * *

<a name="module_IdaTable.computed.columnsSelectedCount"></a>

#### computed.columnsSelectedCount()
считает количество выбранных колонок для показа

**Kind**: static method of [<code>computed</code>](#module_IdaTable.computed)  

* * *

<a name="module_IdaTable.computed.allProductsSelectedCheck"></a>

#### computed.allProductsSelectedCheck()
предикат проверающий все ли продуктв на странице выбраны
 чтобы правильно работал чекбокс выбрать все при отмене выбора какого либо продукта

**Kind**: static method of [<code>computed</code>](#module_IdaTable.computed)  

* * *

<a name="module_IdaTable.directives"></a>

### IdaTable.directives
директива для плагина скрытия менюшек при клике снаружи элемента

**Kind**: static property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable.data"></a>

### IdaTable.data()
модель данных

**Kind**: static method of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable.created"></a>

### IdaTable.created()
хук для загрузки данных с имитации api

**Kind**: static method of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..selectedProducts"></a>

### IdaTable~selectedProducts
отмеченные продукты для удаления

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..selectedProduct"></a>

### IdaTable~selectedProduct
продукт выбранный контекстно для удаления
если null значит не контекстное удаление

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..selectedProductRow"></a>

### IdaTable~selectedProductRow
продукт для выбранной строки таблицы

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..allProductsSelected"></a>

### IdaTable~allProductsSelected
модель для чекбокса выбрать все продукты в таблице

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..confirmStyle"></a>

### IdaTable~confirmStyle
объект стиля для окна подтверждения удаления

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..selectColumnsStyle"></a>

### IdaTable~selectColumnsStyle
объект стиля для меню выбора видимости колонок

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..showColumns"></a>

### IdaTable~showColumns
модель для чекбоков выбранных колонок в меню выбора видимости
all выбрать все колонки

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

<a name="module_IdaTable..getProducts"></a>

### IdaTable~getProducts
загрузка данных с api

**Kind**: inner property of [<code>IdaTable</code>](#module_IdaTable)  

* * *

