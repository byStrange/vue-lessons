<template>
  <div class="jobs">
    <h1>Jobs</h1>
    <ul>
      <li v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobDetails', params: { id: job.id, description: job.description } }">
          <h2>
            {{ job.title }}
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          description: "This is a description of the job",
          location: "San Francisco, CA",
          salary: "$100,000",
        },
        {
          id: 2,
          title: "Software Engineer",
          description: "This is a description of the job",
          location: "San Francisco, CA",
          salary: "$100,000",
        },
        {
          id: 3,
          title: "Software Engineer",
          description: "This is a description of the job",
          location: "San Francisco, CA",
          salary: "$100,000",
        },
      ],
    };
  },
  mounted() {
    this.jobs.forEach(job => {
        this.$router.push({ name: 'jobDetails', params: { id: job.id, description: job.description } });
    })
}
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}

.job a{
    text-decoration: none;
}

ul {
  max-width: 500px;
  margin: 0 auto;
}
li {
  list-style: none;
}
h2 {
  font-size: 1.5em;
}
</style>