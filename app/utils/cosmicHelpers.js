import axios from 'axios';

var helpers = {
    getBlogPosts: function() {
        return axios.get('https://api.cosmicjs.com/v1/jonk-blog')
            .then(function (info) {
                return info.data.bucket.objects;
            })
            .catch(function (err) {
                console.warn('Error getting cosmic data', err);
            })
    }
};

module.exports = helpers;