<a name="module_store"></a>

## store

* [store](#module_store)
    * [~storeConfig](#module_store..storeConfig)
        * [.state](#module_store..storeConfig.state)
            * [.dataLoaded](#module_store..storeConfig.state.dataLoaded)
            * [.products](#module_store..storeConfig.state.products)
            * [.productsPerPage](#module_store..storeConfig.state.productsPerPage)
            * [.currentPage](#module_store..storeConfig.state.currentPage)
            * [.sortField](#module_store..storeConfig.state.sortField)
            * [.sortDirection](#module_store..storeConfig.state.sortDirection)
            * [.deleteTransactionFlag](#module_store..storeConfig.state.deleteTransactionFlag)
            * [.deleteTransactionSucсessFlag](#module_store..storeConfig.state.deleteTransactionSucсessFlag)
        * [.mutations](#module_store..storeConfig.mutations)
            * [.setProducts()](#module_store..storeConfig.mutations.setProducts)
            * [.setDataLoaded()](#module_store..storeConfig.mutations.setDataLoaded)
            * [.sortProducts(fieldName)](#module_store..storeConfig.mutations.sortProducts)
            * [.setProductsPerPage()](#module_store..storeConfig.mutations.setProductsPerPage)
            * [.nextPage()](#module_store..storeConfig.mutations.nextPage)
            * [.previosPage()](#module_store..storeConfig.mutations.previosPage)
            * [.setDeleteTransactionFlag(flag)](#module_store..storeConfig.mutations.setDeleteTransactionFlag)
            * [.setDeleteTransactionSucсessFlag()](#module_store..storeConfig.mutations.setDeleteTransactionSucсessFlag)
            * [.deleteProducts(products)](#module_store..storeConfig.mutations.deleteProducts)
        * [.getters](#module_store..storeConfig.getters)
            * [.pageCount()](#module_store..storeConfig.getters.pageCount)
        * [.actions](#module_store..storeConfig.actions)
            * [.getProducts()](#module_store..storeConfig.actions.getProducts)
            * [.deleteProductsAPI()](#module_store..storeConfig.actions.deleteProductsAPI)


* * *

<a name="module_store..storeConfig"></a>

### store~storeConfig
store configuration

**Kind**: inner property of [<code>store</code>](#module_store)  

* [~storeConfig](#module_store..storeConfig)
    * [.state](#module_store..storeConfig.state)
        * [.dataLoaded](#module_store..storeConfig.state.dataLoaded)
        * [.products](#module_store..storeConfig.state.products)
        * [.productsPerPage](#module_store..storeConfig.state.productsPerPage)
        * [.currentPage](#module_store..storeConfig.state.currentPage)
        * [.sortField](#module_store..storeConfig.state.sortField)
        * [.sortDirection](#module_store..storeConfig.state.sortDirection)
        * [.deleteTransactionFlag](#module_store..storeConfig.state.deleteTransactionFlag)
        * [.deleteTransactionSucсessFlag](#module_store..storeConfig.state.deleteTransactionSucсessFlag)
    * [.mutations](#module_store..storeConfig.mutations)
        * [.setProducts()](#module_store..storeConfig.mutations.setProducts)
        * [.setDataLoaded()](#module_store..storeConfig.mutations.setDataLoaded)
        * [.sortProducts(fieldName)](#module_store..storeConfig.mutations.sortProducts)
        * [.setProductsPerPage()](#module_store..storeConfig.mutations.setProductsPerPage)
        * [.nextPage()](#module_store..storeConfig.mutations.nextPage)
        * [.previosPage()](#module_store..storeConfig.mutations.previosPage)
        * [.setDeleteTransactionFlag(flag)](#module_store..storeConfig.mutations.setDeleteTransactionFlag)
        * [.setDeleteTransactionSucсessFlag()](#module_store..storeConfig.mutations.setDeleteTransactionSucсessFlag)
        * [.deleteProducts(products)](#module_store..storeConfig.mutations.deleteProducts)
    * [.getters](#module_store..storeConfig.getters)
        * [.pageCount()](#module_store..storeConfig.getters.pageCount)
    * [.actions](#module_store..storeConfig.actions)
        * [.getProducts()](#module_store..storeConfig.actions.getProducts)
        * [.deleteProductsAPI()](#module_store..storeConfig.actions.deleteProductsAPI)


* * *

<a name="module_store..storeConfig.state"></a>

#### storeConfig.state
global state

**Kind**: static property of [<code>storeConfig</code>](#module_store..storeConfig)  

* [.state](#module_store..storeConfig.state)
    * [.dataLoaded](#module_store..storeConfig.state.dataLoaded)
    * [.products](#module_store..storeConfig.state.products)
    * [.productsPerPage](#module_store..storeConfig.state.productsPerPage)
    * [.currentPage](#module_store..storeConfig.state.currentPage)
    * [.sortField](#module_store..storeConfig.state.sortField)
    * [.sortDirection](#module_store..storeConfig.state.sortDirection)
    * [.deleteTransactionFlag](#module_store..storeConfig.state.deleteTransactionFlag)
    * [.deleteTransactionSucсessFlag](#module_store..storeConfig.state.deleteTransactionSucсessFlag)


* * *

<a name="module_store..storeConfig.state.dataLoaded"></a>

##### state.dataLoaded
данные успешно загружен

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.products"></a>

##### state.products
массиы всех продуктов

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.productsPerPage"></a>

##### state.productsPerPage
количество продуктов на странице

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.currentPage"></a>

##### state.currentPage
текущая страница

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.sortField"></a>

##### state.sortField
поле по которому отсортированы продукты

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.sortDirection"></a>

##### state.sortDirection
направление сорировки asc || desc

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.deleteTransactionFlag"></a>

##### state.deleteTransactionFlag
флаг тразнакции на удаление продуктов
процесс асинхронный true транзакция идет, false не идет

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.state.deleteTransactionSucсessFlag"></a>

##### state.deleteTransactionSucсessFlag
флаг успешного завершения транзакции удаления

**Kind**: static property of [<code>state</code>](#module_store..storeConfig.state)  

* * *

<a name="module_store..storeConfig.mutations"></a>

#### storeConfig.mutations
мутации

**Kind**: static property of [<code>storeConfig</code>](#module_store..storeConfig)  

* [.mutations](#module_store..storeConfig.mutations)
    * [.setProducts()](#module_store..storeConfig.mutations.setProducts)
    * [.setDataLoaded()](#module_store..storeConfig.mutations.setDataLoaded)
    * [.sortProducts(fieldName)](#module_store..storeConfig.mutations.sortProducts)
    * [.setProductsPerPage()](#module_store..storeConfig.mutations.setProductsPerPage)
    * [.nextPage()](#module_store..storeConfig.mutations.nextPage)
    * [.previosPage()](#module_store..storeConfig.mutations.previosPage)
    * [.setDeleteTransactionFlag(flag)](#module_store..storeConfig.mutations.setDeleteTransactionFlag)
    * [.setDeleteTransactionSucсessFlag()](#module_store..storeConfig.mutations.setDeleteTransactionSucсessFlag)
    * [.deleteProducts(products)](#module_store..storeConfig.mutations.deleteProducts)


* * *

<a name="module_store..storeConfig.mutations.setProducts"></a>

##### mutations.setProducts()
установить масив продуктов

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.setDataLoaded"></a>

##### mutations.setDataLoaded()
установить флаг того, что продуктв загружены

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.sortProducts"></a>

##### mutations.sortProducts(fieldName)
осротировать продукты по полю

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | имя поля для сортировки |


* * *

<a name="module_store..storeConfig.mutations.setProductsPerPage"></a>

##### mutations.setProductsPerPage()
установить количество продуктов на страинце

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.nextPage"></a>

##### mutations.nextPage()
следующая страница

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.previosPage"></a>

##### mutations.previosPage()
предидущая страница

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.setDeleteTransactionFlag"></a>

##### mutations.setDeleteTransactionFlag(flag)
признак осуществления транзакции на удаление

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>boolean</code> | true транзакция идет, false не идет если идет транзакция удаления - другие транзакции интерфейс не запускает |


* * *

<a name="module_store..storeConfig.mutations.setDeleteTransactionSucсessFlag"></a>

##### mutations.setDeleteTransactionSucсessFlag()
флаг успеха транзакции удаления

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

* * *

<a name="module_store..storeConfig.mutations.deleteProducts"></a>

##### mutations.deleteProducts(products)
удалить выбранные продукты

**Kind**: static method of [<code>mutations</code>](#module_store..storeConfig.mutations)  

| Param | Type | Description |
| --- | --- | --- |
| products | <code>Array</code> | массив продкутов для удаления |


* * *

<a name="module_store..storeConfig.getters"></a>

#### storeConfig.getters
GETTERS

**Kind**: static property of [<code>storeConfig</code>](#module_store..storeConfig)  

* * *

<a name="module_store..storeConfig.getters.pageCount"></a>

##### getters.pageCount()
считает общеее количество страниц для пейджинга

**Kind**: static method of [<code>getters</code>](#module_store..storeConfig.getters)  

* * *

<a name="module_store..storeConfig.actions"></a>

#### storeConfig.actions
ACTIONS

**Kind**: static property of [<code>storeConfig</code>](#module_store..storeConfig)  

* [.actions](#module_store..storeConfig.actions)
    * [.getProducts()](#module_store..storeConfig.actions.getProducts)
    * [.deleteProductsAPI()](#module_store..storeConfig.actions.deleteProductsAPI)


* * *

<a name="module_store..storeConfig.actions.getProducts"></a>

##### actions.getProducts()
загружает продкты через имитацию апи

**Kind**: static method of [<code>actions</code>](#module_store..storeConfig.actions)  

* * *

<a name="module_store..storeConfig.actions.deleteProductsAPI"></a>

##### actions.deleteProductsAPI()
удаляет продукты

**Kind**: static method of [<code>actions</code>](#module_store..storeConfig.actions)  

* * *

