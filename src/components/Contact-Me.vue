<template>

<div>
   <div class="container d-flex justify-content-center align-items-center mt-5 mb-5 pt-5">
        <div>
                <h1 class="text-center text-info text-lg icons"><font-awesome-icon icon="fa-solid fa-envelope" /></h1>
                <h3>Contact me</h3>
        </div>
    </div> 

    <div class="container-lg h-100  mt-5 d-flex justify-content-center align-items-center mt-5 mb-5 rounded-3">
        <div>
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img  class="img-fluid" src="../assets/h2.gif" alt="">
                </div>

                <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Write something</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <div class="mt-2">
                            <button class="btn btn-outline-light">Send Message</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>


<script>
export default{
    name:"Contact-Me"
}

</script>

<style>
</style>