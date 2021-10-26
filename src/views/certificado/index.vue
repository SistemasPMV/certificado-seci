<template>
  <div>
    <img
      style="display: none"
      ref="imageCertificado"
      src="../../assets/certificado.png"
    />
  </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  name: "Certificado",
  props: {},
  methods: {
    generatePDF() {
      const doc = new jsPDF({
        orientation: "landscape",
        type: "pdfjsnewwindow",
      });

      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();

      doc.addImage(this.$refs.imageCertificado, "PNG", 0, 0, width, height);
      //doc.save("certificado.pdf");
      var string = doc.output("datauri");
      var x = window.open();
      x.document.open();
      x.document.location = string;
    },
  },
  mounted() {
    this.generatePDF();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
