import React from 'react';
import './ProductDetailModal.css'

export const ProductDetailModal = () => {
  return (
    <div class="container">
    <article class="modal-producto">
        <div class="imagen">
            <img src="https://centrocuauhtemoc.com/wp-content/uploads/2022/06/Sin-titulo-500x500.png" alt="" />
        </div>
        <section class="info">
            <div class="imagen">
                <img src="https://celumania.com.ec/wp-content/uploads/2021/10/TELEFONO-SAMSUNG-GALAXY-A10S-NEGRO.png" alt="" />
            </div>
            <div class="detalles">
                <p class="precio">$3,499.00 x 1</p>
                <div class="nombre">Samsung A10S 13+2MP 64GB, 4GB RAM</div>
                <div class="color">Color seleccionado: <strong>Gris Ratón</strong></div>
            </div>
        </section>
        <div class="cantidad">
            <span>1 Ítem en tu carrito</span>
            <span class="subtotal">Subtotal <p class="precio">$3,499.00</p></span>
        </div>
        <section class="compra">
            <div class="check">
                <i class="fa-solid fa-check"></i>
            </div>
            <p>Te vas a llevar este celular por solo</p>
            <p class="semana">$120 p/semana!</p>
            <button class="btn">COMPRAR A CRÉDITO</button>
            <p class="otro"><em>o puedes</em></p>
            <p class="contado">Comprar al contado</p>
        </section>
    </article>
</div>
  )
}
