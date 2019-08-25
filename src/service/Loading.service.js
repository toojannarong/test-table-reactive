import Vue from 'vue'
class LoadingService {
    show() {
         this.loader = Vue.$loading.show();
    }

    hide() {
        this.loader.hide();
    }
}

export default new LoadingService();
