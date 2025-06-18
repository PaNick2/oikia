<script setup>
import { Input } from '@/components/ui/input';

</script>
<template>
  <footer class="bg-gray-800 pt-20 pb-12 px-12">
    <div class="footer-inner container flex flex-wrap max-md:flex-col justify-center md:justify-between gap-4 mx-auto max-w-[1300px]">
      <div class="column column-categories text-center flex flex-col gap-y-3 text-gray-200">
        <Link href="/test">Bedroom</Link>
        <Link href="/test">Living room</Link>
        <Link href="/test">Bathroom</Link>
        <Link href="/test">Decoration</Link>
        <Link href="/test">Kitchen</Link>
        <Link href="/test">Sale</Link>
      </div>
      <div class="column column-newsletter flex flex-col text-center max-md:order-[-1]">
        <h3 class="my-text-h3 text-gray-100">Stay in touch with us</h3>
        <p class="mt-3 my-text-body-sm text-gray-300">Receive the latest updates about our products & promotions</p>
        <Input type="email" placeholder="Your email" class="mt-8 border-gray-600 text-gray-600" />
      </div>
      <div class="column column-help text-center flex flex-col gap-y-3 text-gray-200">
        <Link href="/test">Shipping options</Link>
        <Link href="/test">Tracking a package</Link>
        <Link href="/test">Help center</Link>
        <Link href="/test">Contact us</Link>
        <Link href="/test">Product returns</Link>
        <Link href="/test">Locations</Link>
      </div>
    </div>
    <p class="copyright mt-20 mx-auto text-center text-gray-300">© All rights reserved. Made by <a href="https://nikopanagopoulos.com" class="text-gray-100">Nikos Panagopoulos</a></p>
  </footer>
</template>
