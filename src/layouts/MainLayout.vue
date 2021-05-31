<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon class="header-icon q-pa-md lt-md" name="fas fa-dove" size="sm" color="primary" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="left" side="left" :width="283" bordered>
      <q-icon class="q-pa-md" name="fas fa-dove" size="lg" color="primary" />
      <q-list>
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item to="/about" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input placeholder="Search Qwitter" class="q-ma-md" outlined rounded dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold">Teachers are cancelled !</q-item-label>
            <q-item-label caption lines="2">random Twitter shit.</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Sport</q-item-label>
            <q-item-label class="text-weight-bold">Saint-Jean les Fossés l'emporte contre Triffouillis les Oies</q-item-label>
            <q-item-label caption lines="2">Une rencontre tendue du cul</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Litterature</q-item-label>
            <q-item-label class="text-weight-bold">Le nouvel opus des aventures de Martine</q-item-label>
            <q-item-label caption lines="2">Martine et 30 cm de bonheur dans toutes les librairies</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
