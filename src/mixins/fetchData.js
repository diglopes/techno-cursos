export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData(param) {
      this.loading = true;
      this.api = null;
      const urlBase = "http://localhost:3000";
      const urlFetch = param
        ? `/curso/${param}`
        : `/${this.$route.name.toLowerCase()}`;
      fetch(urlBase + urlFetch)
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
