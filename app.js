const app = Vue.createApp({
    data(){
        return{
           url: 'http://www.thenetninja.co.uk',
           showBooks: true,
           books: [
            { title: 'name of the wind', author:'Patrick Rothfuss',img:'assets/1.jpg',isFav: true},
            {title:'the way of kings', author:'Brandon Sanderson',img:'assets/2.jpg',isFav: false},
            {title:'the final empire', author:'Brandon Sanderson',img:'assets/3.jpg',isFav: true},
           ]
        }
    },
    methods: {
       toggleShowBooks(){
        this.showBooks = !this.showBooks
       },
       handleEvent(e,data){
        console.log(e,e.type);
        if( data){
            console.log(e,data);
        }
       },
       handleMouseMove(e){
         this.x = e.offsetX
         this.y = e.offsetY
       },
       toggleBgColor(book){
          book.isFav = !book.isFav
       }
    },
    computed: {
        filteredBooks(){
         return  this.books.filter(book => book.isFav )
        }
    }
})

app.mount('#app')