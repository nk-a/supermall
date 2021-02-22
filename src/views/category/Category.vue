<template>
  <div class="wrapper">
    <ul class="content">
      <li>abc1</li>
      <li>abc2</li>
      <li>abc3</li>
      <li>abc4</li>
      <li>abc5</li>
      <li>abc6</li>
      <li>abc7</li>
      <li>abc8</li>
      <li>abc9</li>
      <li>abc10</li>
      <li>abc11</li>
      <li>abc12</li>
      <li>abc13</li>
      <li>abc14</li>
      <li>abc15</li>
      <li>abc16</li>
      <li>abc17</li>
      <li>abc18</li>
      <li>abc19</li>
      <li>abc20</li>
      <li>abc21</li>
      <li>abc22</li>
      <li>abc23</li>
      <li>abc24</li>
      <li>abc25</li>
      <li>abc26</li>
      <li>abc27</li>
      <li>abc28</li>
      <li>abc29</li>
      <li>abc30</li>
      <li>abc31</li>
      <li>abc32</li>
      <li>abc33</li>
      <li>abc34</li>
      <li>abc35</li>
      <li>abc36</li>
      <li>abc37</li>
      <li>abc38</li>
      <li>abc39</li>
      <li>abc40</li>
      <li>abc41</li>
      <li>abc42</li>
      <li>abc43</li>
      <li>abc44</li>
      <li>abc45</li>
      <li>abc46</li>
      <li>abc47</li>
      <li>abc48</li>
      <li>abc49</li>
      <li>abc50</li>
      <li>abc51</li>
      <li>abc52</li>
      <li>abc53</li>
      <li>abc54</li>
      <li>abc55</li>
      <li>abc56</li>
      <li>abc57</li>
      <li>abc58</li>
      <li>abc59</li>
      <li>abc60</li>
      <li>abc61</li>
      <li>abc62</li>
      <li>abc63</li>
      <li>abc64</li>
      <li>abc65</li>
      <li>abc66</li>
      <li>abc67</li>
      <li>abc68</li>
      <li>abc69</li>
      <li>abc70</li>
      <li>abc71</li>
      <li>abc72</li>
      <li>abc73</li>
      <li>abc74</li>
      <li>abc75</li>
      <li>abc76</li>
      <li>abc77</li>
      <li>abc78</li>
      <li>abc79</li>
      <li>abc80</li>
      <li>abc81</li>
      <li>abc82</li>
      <li>abc83</li>
      <li>abc84</li>
      <li>abc85</li>
      <li>abc86</li>
      <li>abc87</li>
      <li>abc88</li>
      <li>abc89</li>
      <li>abc90</li>
      <li>abc91</li>
      <li>abc92</li>
      <li>abc93</li>
      <li>abc94</li>
      <li>abc95</li>
      <li>abc96</li>
      <li>abc97</li>
      <li>abc98</li>
      <li>abc99</li>
      <li>abc100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      click: true,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
    });
    // this.scroll.on("pullingUp");
  }
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
