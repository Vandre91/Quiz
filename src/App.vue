<template>
 <div class="app">
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/"><a class="navbar-brand"><img class="logo" src="./assets/logo.png"></img></a></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/"><a class="nav-link text-info" href="#"><i class="fa fa-home"></i>Home</a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Stats"><a class="nav-link text-info" href="#"><i class="fa fa-area-chart"></i>Stats</a></router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .logo{
    height: 30px;
    width: 30px;
  }

  .navbar-icon-top .navbar-nav .nav-link > .fa {
    position: relative;
    width: 36px;
    font-size: 24px;
  }

  .navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
    font-size: 0.75rem;
    position: absolute;
    right: 0;
    font-family: sans-serif;
  }

  .navbar-icon-top .navbar-nav .nav-link > .fa {
    top: 3px;
    line-height: 12px;
  }

  .navbar-icon-top .navbar-nav .nav-link > .fa > .badge {
    top: -10px;
  }

  @media (min-width: 576px) {
    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
      text-align: center;
      display: table-cell;
      height: 70px;
      vertical-align: middle;
      padding-top: 0;
      padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {
      display: block;
      width: 48px;
      margin: 2px auto 4px auto;
      top: 0;
      line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {
      top: -7px;
    }
  }

  @media (min-width: 768px) {
    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
      text-align: center;
      display: table-cell;
      height: 70px;
      vertical-align: middle;
      padding-top: 0;
      padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {
      display: block;
      width: 48px;
      margin: 2px auto 4px auto;
      top: 0;
      line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {
      top: -7px;
    }
  }

  @media (min-width: 992px) {
    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
      text-align: center;
      display: table-cell;
      height: 70px;
      vertical-align: middle;
      padding-top: 0;
      padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {
      display: block;
      width: 48px;
      margin: 2px auto 4px auto;
      top: 0;
      line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {
      top: -7px;
    }
  }

  @media (min-width: 1200px) {
    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
      text-align: center;
      display: table-cell;
      height: 70px;
      vertical-align: middle;
      padding-top: 0;
      padding-bottom: 0;
    }

    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {
      display: block;
      width: 48px;
      margin: 2px auto 4px auto;
      top: 0;
      line-height: 24px;
    }

    .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {
      top: -7px;
    }
  }
</style>
