<template>
  <main>
    <img
      style="display: none"
      ref="imageCertificado"
      src="../assets/certificado.png"
    />

    <div class="container">
      <div class="row">
        <div class="form-group col-md-6">
          <label>Nome:</label>
          <input class="form-control" v-model="nome" type="text" />
        </div>

        <div class="form-group col-md-6">
          <label>&nbsp;</label>
          <button class="btn btn-primary form-control"  @click="generatePDF()">Gerar Certificado</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  name: "Home",
  data() {
    return {
      nome: "",
    };
  },
  methods: {
    GerarCertificado() {
      this.$router.push("certificado");
    },
    generatePDF() {
      const doc = new jsPDF({
        orientation: "landscape",
        type: "pdfjsnewwindow",
      });

      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();

      doc.addImage(this.$refs.imageCertificado, "PNG", 0, 0, width, height);
      doc.text(this.nome.toUpperCase(), 110, 106);
      doc.text("26/10/2021", 98, 133);
      //doc.save("certificado.pdf");
      doc.output("dataurlnewwindow");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
