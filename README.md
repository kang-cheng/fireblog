fireblog
===

intro
---
A github pages Blog system powered by AngularJS and Firebase and Bootstrap.

[AngularJS](https://angularjs.org/)

[Firebase](https://www.firebase.com/)

[Bootstrap](http://getbootstrap.com/)

[Clean Blog](http://startbootstrap.com/template-overviews/clean-blog/)

development
---
Basic Routing Structure:

- home: show article list by page
- articles: show the timeline
- cats: show all cat-tags
- tags: show all article tags

- article=:id: show a certain article
- cat=:id: show article list in a certain category
- tag=:id: show article list with a certain tag

- admin: admin panel
- admin/articles: article list with add/edit/delete operation buttons
- admin/post: post a new article
- admin/edit=:id: edit an article
-admin/login: login page

Database Structure:
- :userid-articles:
  - $id
  - title
  - cat
  - tags
  - content
  - date
  - conments
- :userid-tags
- :userid-cats
- users
