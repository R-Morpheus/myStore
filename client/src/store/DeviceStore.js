import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Ноутбуки'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Телевизоры'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenovo'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12', price: 70000, rating: 5, img: "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"},
            {id: 2, name: 'Macbook Pro M1', price: 12000, rating: 5, img: "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"},
            {id: 3, name: 'Samsung Notebook9', price: 12000, rating: 5, img: "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"},
            {id: 4, name: 'Samsung Television', price: 150000, rating: 5, img: "https://images.unsplash.com/photo-1604054923518-e491a9a6afbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"},

        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this.brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}