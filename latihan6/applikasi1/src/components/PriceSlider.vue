<template>
    <transition name="custom" enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__slideOutRight">
        <div v-if="sliderStatus">
            <div class="card" :class="sliderState">
                <div class="card-body">
                    <label for="" class="form-label mr-2">Max : </label>
                    <input type="number" class="form-control mx-2" style="width: 60px;text-align: center;"
                        v-model="maxAmount" @change="$emit('update:maximum', maxAmount)" />
                    <input type="range" class="form-range mt-2" min="0" max="200" v-model="maxAmount"
                        @input="$emit('update:maximum', maxAmount)" />
                </div>
            </div>
        </div>
    </transition>
</template>
    
<script>
export default {
    name: "price-slider",
    data: function () {
        return {
            maxAmount: 20,
        };
    },
    props: ["sliderStatus", "maximum"],
    computed: {
        sliderState: function () {
            return this.sliderStatus ? "d-flex" : "d-none"; // pengunaan IF else ke 2
        },
    }
}
</script>

<style>
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}
</style>