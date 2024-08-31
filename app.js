const app = Vue.createApp({
  data() {
      return {
          url: 'https://www.w3schools.com',
          name: 'Joe',
          lastName: 'Abi Ramia',
          email: 'joeabiramia27@gmail.com',
          age: 26,

          books: [
              { title: 'Lord of the Rings', author: 'John Ronald Reuel Tolkien', img: 'assets/1.png', isFav: true },
              { title: '12 Rules for Life', author: 'Jordan Peterson', img: 'assets/2.jpeg', isFav: false },
              { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', img: 'assets/3.jpeg', isFav: true },
              { title: 'The Sales Magnet', author: 'Kendra Lee', img: 'assets/4.jpeg', isFav: false }
          ]
      }
  },
  methods: {
      changemyname(newname) {
          this.name = newname;
      },
      handleEvent() {
          console.log('Event handled');
      },
      addToFavorite(book) {
          book.isFav = !book.isFav;
      }
  }
});

app.mount('#app');
