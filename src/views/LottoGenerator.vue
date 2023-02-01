<template>
  <div>
    <div>당첨 숫자</div>
    <div id="">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from '../components/LottoBall.vue';

  function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

// LottoBall -> lotto-ball 로 뷰가 자동으로 바꿔줌
  const timeouts = [];

  export default {
    components : {
      LottoBall,
    },
    data() {
      return {
        winNumbers : getWinNumbers(),
        winBalls : [],
        bonus : null,
        redo : false,
      };
    },
    computed: {
    },
    methods: {
      onClickRedo() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        // this.showBalls();
      },
      showBalls() {
        for (let i = 0; i < this.winNumbers.length - 1; i++) {
          timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        }
        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);
      },
    },
    mounted() {
      this.showBalls();
    },
    beforeDestroy() {
      timeouts.forEach((t)=> {
        clearTimeout(t);
      })
    },
    watch: { // 감시자??
      // 객체나, 배열은 참조관계라서 현재값, 이전값이 같게 나올 수 있음 
      // 왠만하면 안 쓰는게 좋음,, 무한반복 될 수도 있고,, 남용하면 안됨
      
      // winBalls(val, oldVal) { // winBalls 가 변경될 때마다 실행됨
      //   if(val.length ===0) {
      //     this.showBalls();
      //   }
      // }
      bonus(val, oldVal) { // bonus 가 변경될 때마다 실행됨
        if(val ===null) {
          this.showBalls();
        }
      }


    }
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>