<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input class="new-qweet" v-model="newQweetContent" placeholder="What's happening?" maxlength="280" bottom-slots counter autogrow>
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="../assets/lion.png">
            </q-avatar>
          </template>
        </q-input>
      </div>

      <div class="col col-shrink">
        <q-btn class="q-mb-lg" color="primary" label="Qweet" :disable="!newQweetContent" unelevated rounded no-caps />
      </div>
    </div>

    <q-separator class="divider" size="10px" color="grey-2" />

    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="../assets/lion.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Radalls</strong>
            <span class="text-grey-7">@le_chibrachiosaure</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus vel turpis eu nibh consequat lobortis eget at turpis.
            Vivamus id quam sit amet massa egestas sodales id ut felis.
          </q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
            <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
            <q-btn flat round color="grey" icon="fas fa-trash" size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: ''
    }
  }
}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
