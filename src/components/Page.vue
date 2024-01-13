<script setup>

  import SongView from "@/components/views/SongView.vue";
  import AlbumView from "@/components/views/AlbumView.vue";
  import PlaylistView from "@/components/views/PlaylistView.vue";
  import ArtistView from "@/components/views/ArtistView.vue";
  import GenreView from "@/components/views/GenreView.vue";

  import * as eb from "@/export.ts"

  // function OpenSonglist() {
  //   document.getElementsByName("ItemView").innerHTML = "<>";
  // }
  //
  //
  // document.getElementById("ResizeBar").addEventListener("click", );



  // eb.addSong()

</script>

<template>
  <Nav>
    <div id="Songs" class="link" onclick=""><i class="fa-solid fa-music"></i><a id="Songs" >Songs</a></div>
    <div id="Playlists" class="link" onclick=""><a id="Playlists">Playlists</a></div>
    <div id="Albums" class="link" onclick=""><a id="Albums">Albums</a></div>
    <div id="Artists" class="link" onclick=""><a id="Artists">Artists</a></div>
  </Nav>
  <div id="wrapper">
    <div id="ItemView" class="resize"></div>
    <div id="resizeBar"></div>
    <div id="ViewSong" class="resize"></div>
  </div>


</template>

<style scoped>
Nav {
  width: 100%;
  height: 4em;
  background-color: darkmagenta;
  display: flex;
  gap: .5em;

  .link {
    svg {
      margin-right: 7px;
    }
    width: 7.5em;
    text-align: center;
    color: #dbd6d3;
    line-height: 4em;
    display: inline-block;


  }



}

.resize {
  box-sizing: border-box;
  flex: 1 1 auto;
}



#ItemView {
  background-color: #2c3e50;
  width: 40%;
  height: calc(100vh - 4em);

}

#ItemView {

  --ViewSong-margin: 30px;

  position: relative;
  background-color: #dbd6d3;
  width: 60%;
  height: calc(100vh - 4em - (2 * var(--ViewSong-margin)));
  left: calc(40% - 2 * var(--ViewSong-margin));
  top: calc(4em - 2 * var(--ViewSong-margin));
  margin: var(--ViewSong-margin);
  border-radius: 14px;

}

</style>