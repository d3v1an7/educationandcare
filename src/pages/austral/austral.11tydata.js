module.exports = {
  eleventyComputed: {
    centre: data => data.centres.list.find(x => x.name === 'Austral')
  }
};
