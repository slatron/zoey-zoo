$(function () {
  var largeImg = {
    img: $('<img>'),
    container: $('#big-image'),
    setImage: function(url) {
      this.img.attr({'src': 'img/' + url});
    },
    init: function() {
      this.container.append(this.img);
    }
  };

  function handleNavClick(e) {
    var name = this.id;
    nav.activate(name);
  }

  var nav = {
    element: $('nav'),
    activate: function(name) {
      var navId  = '#' + name,
          imgUrl = name + '.jpg';
      this.element.find('li').removeClass('active');
      this.element.find(navId).addClass('active');
      largeImg.setImage(imgUrl);
      var key = name.split('-').length === 1 ?
        name :
        name.split('-')[1];
      infoBox.setInfo(key);
    },
    init: function() {
      this.activate('kitten');
      this.element.find('li').on('click', handleNavClick);
    }
  };

  var infoBox = {
    element: $('<div id="info-box">')
              .append('<div id="info-name">')
              .append('<div id="info-fact">'),
    init: function() {
      nav.element.append(this.element);
    },
    setInfo: function(animalKey) {
      var info = zoey_info.animals[animalKey];
      this.element.find('#info-name').text(info.name);
      this.element.find('#info-fact').text(info.fun_fact);
    }
  };

  // init page objectis
  largeImg.init();
  nav.init();
  infoBox.init();
});
