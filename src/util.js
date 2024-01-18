
class Helpers {

    static filterHelper(obj, x){
        if (!obj[x.name]){
            obj[x.name] = x.price;
        }
    }

    static createObject(list){

        const obj = {};
        list.forEach((x) => this.filterHelper(obj, x));
        return obj;
    }

    static combinePrice(units, pricePer){
        let combinedPrice = parseInt(units) * parseInt(pricePer);
        return combinedPrice;
    }

    static languageHelper(item, name){
        if (item.application_name === name){
            return `- ${item.language_name}`;
        }
        return;
    }

    static languageFilter(language, name){
        return language.map(item => this.languageHelper(item, name))
    }

}

export default Helpers;