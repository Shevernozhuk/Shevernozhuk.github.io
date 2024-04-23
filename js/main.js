var app = new Vue({
    el: "#cabbage-app",
    data:{
        products:[
            {id:1,title:"Cabbage_1",short_text:"short_text",image:'../images/cabbage_1.jpg',
            desc:{
                plant:{p1:"Cabbage_1 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 1-5 kg."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Green"
            }},
            {id:2,title:"Cabbage_2",short_text:"short_text",image:'../images/cabbage_2.jpg',
            desc:{
                plant:{p1:"Cabbage_2 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 1-3 kg."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Green"
            }},
            {id:3,title:"Cabbage_3",short_text:"short_text",image:'../images/cabbage_3.jpg',
            desc:{
                plant:{p1:"Cabbage_3 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep white color.",
                       f3:"Average fruit size: 1 kg."},
                cycle:{c1:"Autumn",c2:"Winter"},
                color:"White"
            }},
            {id:4,title:"Cabbage_4",short_text:"short_text",image:'../images/cabbage_4.jpg',
            desc:{
                plant:{p1:"Cabbage_4 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep purple color.",
                       f3:"Average fruit size: 0.5-3 kg."},
                cycle:{c1:"Autumn",c2:"Winter"},
                color:"Purple"
            }},
            {id:5,title:"Cabbage_5",short_text:"short_text",image:'../images/cabbage_5.jpg',
            desc:{
                plant:{p1:"Cabbage_5 is strong vigor that provides good leaf coverage.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Long shelf life on plant and post harvest.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 50-150 grams."},
                cycle:{c1:"Autumn",c2:"Winter"},
                color:"Green"
            }}
        ],
        product:[],
        cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible:0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Вашу заявку відправлено. Натисніть ОК.");
        }
    },
});