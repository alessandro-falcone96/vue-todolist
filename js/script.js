var app = new Vue(
  {
    el: '#listaToDo',
    data: {
      newItem: "",
      lista: [
        'fare il bucato',
        'guardare netflix',
        'fare il pranzo',
        'finire il compito',
        'andare a dormire'
      ]
    },
    methods: {
      removeItem: function(itemIndex) {
        this.lista.splice(itemIndex, 1);
      },
      addItem: function() {
        this.lista.push(this.newItem);
      }
    }
  }
);
