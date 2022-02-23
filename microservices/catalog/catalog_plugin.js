let books = [];
function catalog_plugin(){
    this.add({init:"catalog_plugin"},(msg,reply)=>{
        console.log("Catalog Plugin Initialized");
        books = require('./books.json');
        reply();
    })
    this.add({role:"catalog",op:"getallbooks"},(args,reply)=>{
        reply(null,books);
    })
    this.add({role:"catalog",op:"searchbytitle"},(args,reply)=>{
        const title = args.title;
        const reqBook = books.filter(book=>book.title===title);
        reply(null,reqBook);
    })
    this.add({role:"catalog",op:"searchbycategory"},(args,reply)=>{
        const category = args.category;
        const reqBook = books.filter(book=>book.category === category);
        reply(null,reqBook);
    })
    this.add({role:"catalog",op:"searchbyauthor"},(args,reply)=>{
        const author = args.author;
        const reqBook = books.filter(book => book.authors.includes(author));
        reply(null,reqBook);
    })
    this.add({role:"catalog",op:"searchbyrating"},(args,reply)=>{
        const rating = args.rating;
        let reqBook;
        if(rating === "Excellent")
            reqBook = books.filter(book=>book.rating>=4.5)
        else if(rating === "Good")
            reqBook = books.filter(book=>book.rating>=4 && book.rating<4.5)
        else if(rating === "Average")
            reqBook = books.filter(book=>book.rating>=3 && book.rating<4) 
        else
            reqBook = books.filter(book=>book.rating<3)   
        reply(null,reqBook);

    })
}
module.exports = catalog_plugin;