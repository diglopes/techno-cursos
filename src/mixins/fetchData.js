export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000/${this.$route.name.toLowerCase()}`)
        .then(res => res.json())
        .then(json => {
          setTimeout(() => {
            this.api = json;
            this.loading = false;
          }, 1500);
        });
    }
  },
  created() {
    this.fetchData();
  }
};
