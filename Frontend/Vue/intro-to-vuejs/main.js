const IN_STOCK = ['in-stock', 'In stock']
const ALMOST_SOLD_OUT = ['almost-sold-out', 'Almost sold out']
const OUT_OF_STOCK = ['out-of-stock', 'Out of stock']

var eventBus = new Vue()

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
    cart: {
      type: Array
    }
  },
  template: `<div class="product">

      <img class="product-image" :src="image">

      <div class="product-info">
        <h1 class="title" :style="{ color: curVariant.color }"> 
          {{ title }} <span class="on-sale" v-show="onSale">- is on sale!!</span> 
        </h1>

        <p class="under-title">
          <span class="shipping"> Shipping: {{ shipping }} </span>
          <span :class="stockState[0]"> {{ stockState[1] }} </span>
          <span :style="{ color: curVariant.color }"> ( {{ curVariant.quantity }} ) </span>
        </p>

        <div class="color-wrapper">
          <div v-for="(variant, index) in variants" 
               :key="variant.id"
               class="box-color"
               :style="{ backgroundColor: variant.color }"
               @mouseover="updateVariant(index)"> </div>
        </div>

        <p class="sizes">
          Sizes: {{ curVariant.sizes.join(', ') }}
        </p>

        <ul class="details">
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
 
        <div class="btn-wrapper">
          <button @click="addToCart" 
                  :disabled="isOutOfStock"
                  :style="{ color: curVariant.color }"
          > Add to Cart </button>
        </div>

        <product-tabs/>



      </div>
    </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      onSale: true,
      details: ['80% cotton', '20% polyester', 'gender -neutral'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './green-socks.png',
          quantity: 20,
          sizes: ['S', 'M', 'L']
        },
        {
          id: 2235,
          color: 'blue',
          image: './blue-socks.png',
          quantity: 9,
          sizes: ['XS', 'S', 'M']
        }
      ],
      curIndex: 0
    }
  },
  methods: {
    addToCart() {
      if (this.curVariant.quantity >= 1) {
        this.curVariant.quantity--
        this.$emit('add-to-cart', this.curVariant)
      } else {
        alert(`"${this.title} ${this.curVariant.color}" is already out of stock!!`)
      }
    },
    updateVariant(index) {
      this.curIndex = index
    }
  },
  computed: {
    curVariant() {
      return this.variants[this.curIndex]
    },
    stockState() {
      const { quantity } = this.curVariant
      if (quantity <= 0) return OUT_OF_STOCK
      if (quantity < 10) return ALMOST_SOLD_OUT
      else return IN_STOCK
    },
    isOutOfStock() {
      return this.stockState[0] === OUT_OF_STOCK[0]
    },
    image() {
      return this.curVariant.image
    },
    title() {
      return this.brand + ' ' + this.product
    },
    shipping() {
      return this.premium ? 'Free' : 2.99
    }
  }
})

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please correct the following errors(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>Would you recommend this product?</p>
      <div>
        <input type="radio" id="highly-recommend" v-model="recommend" value="Highly recommend">
        <label for="highly-recommend">Highly recommend</label>
      </div>
      <div>
        <input type="radio" id="recommend" v-model="recommend" value="Recommend">
        <label for="recommend">Recommend</label>
      </div>
      <div>
        <input type="radio" id="not-at-all" v-model="recommend" value="Not at all">
        <label for="not-at-all">Not at all</label>
      </div>

      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: [],
      recommend: null
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        eventBus.$emit('review-submit', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.errors = []
        this.recommend = null
      } else {
        if (!this.name) this.errors.push('Name required')
        if (!this.review) this.errors.push('Review required')
        if (!this.rating) this.errors.push('Rating required')
        if (!this.recommend) this.errors.push('Recommendation option required')
      }
    }
  }
})

Vue.component('product-tabs', {
  template: `
    <div>
      <span class="tab" 
            :class="{ 'active-tab': activeTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = tab">
        {{ tab }}
      </span>

      <div v-show="activeTab === 'Reviews'">
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
          <li v-for="review in reviews">
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
            <p>{{ review.recommend }}</p>
          </li>
        </ul>
      </div>
      <product-review v-show="activeTab === 'Make a review'"
                      />@review-submit="addReview"

    </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Make a review'],
      activeTab: 'Reviews',
      reviews: []
    }
  },
  methods: {
    addReview(productReview) {
      this.reviews.push(productReview)
    }
  },
  mounted() {
    eventBus.$on('review-submit', this.addReview)
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: [],
    recentRemoved: null
  },
  methods: {
    addToCart(variant) {
      this.cart.push(variant)
    },
    removeFromCart() {
      if (this.cart.length >= 1) {
        const removed = this.cart.pop()
        removed.quantity++
      }
    }
  }
})