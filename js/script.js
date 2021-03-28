var app = new Vue(
  {
    el: '#listaToDo',
    data: {
      newItem: "",
      lista: [
        'carne',
        'pesce',
        'frutta',
        'verdura',
        'gelato'
      ]
    },
    methods: {
      removeItem: function(itemIndex) {
        this.lista.splice(itemIndex, 1);
      },
      addItem: function() {
        this.lista.push(this.newItem);
        this.newItem = "";
      }
    }
  }
);
