const { Storage } = require('@google-cloud/storage');

// Log the names of the first 5 buckets in the response
new Storage().getBuckets().then(response => {
  const buckets = response[0];
  return buckets.slice(0, 5).map(bucket => bucket.name);
}).then(console.log, console.error);
