Router.configure({
    layoutTemplate: 'layout'
});
Router.map(function () {
    // home page
    this.route('posts', {path: '/', template: 'posts'});
    // about page
    this.route('about');
    // profile page
    this.route('profile');
});