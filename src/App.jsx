
import React, {useState, useEffect} from "react";

import productsData from "./products.json";

function formatPrice(n){ return n.toLocaleString("ru-RU",{style:"currency", currency:"RUB", maximumFractionDigits:0}); }

export default function App(){
  const [view, setView] = useState({name:"home", payload:null});
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminLogged, setAdminLogged] = useState(false);

  useEffect(()=>{ localStorage.setItem("oz_data", JSON.stringify(products)); }, [products]);

  function go(name,payload=null){ setView({name,payload}); }
  function addToCart(id){ setCart(c=>{ const found=c.find(x=>x.id===id); if(found) return c.map(x=>x.id===id?{...x,qty:x.qty+1}:x); return [...c,{id,qty:1}]; }); }
  function removeFromCart(id){ setCart(c=>c.filter(x=>x.id!==id)); }

  function startAdmin(){ setAdminOpen(true); setAdminPass(""); }
  function loginAdmin(){ if(adminPass==="admin123"){ setAdminLogged(true); setAdminOpen(false); go("admin"); } else alert("Неверный пароль"); }

  return (
    <div>
      <Header cart={cart} go={go} adminLogged={adminLogged} startAdmin={startAdmin} />
      <main style={{maxWidth:1100, margin:"16px auto", padding:16}}>
        {view.name==="home" && <Home products={products} go={go} addToCart={addToCart} />}
        {view.name==="product" && <ProductView id={view.payload} products={products} addToCart={addToCart} />}
        {view.name==="cart" && <CartView cart={cart} products={products} removeFromCart={removeFromCart} setView={setView} />}
        {view.name==="checkout" && <Checkout cart={cart} products={products} setCart={setCart} />}
        {view.name==="admin" && adminLogged && <Admin products={products} setProducts={setProducts} />}
      </main>

      {adminOpen && <div style={{position:"fixed",left:0,top:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.4)"}}>
        <div style={{background:"#fff",padding:20,borderRadius:8}}>
          <h3>Вход в админ-панель</h3>
          <input value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="Пароль" />
          <div style={{marginTop:10}}>
            <button className="btn" onClick={()=>setAdminOpen(false)}>Отмена</button>
            <button className="btn primary" style={{marginLeft:8}} onClick={loginAdmin}>Войти</button>
          </div>
        </div>
      </div>}

      <Footer />
    </div>
  );
}

function Header({cart, go, adminLogged, startAdmin}){
  return (
    <header style={{background:"#fff", boxShadow:"0 1px 3px rgba(0,0,0,0.06)"}}>
      <div style={{maxWidth:1100, margin:"0 auto", padding:16, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,cursor:"pointer"}} onClick={()=>go("home")}>
          <div style={{width:44,height:44,borderRadius:8, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700}}>O</div>
          <div>
            <div style={{fontSize:16,fontWeight:600}}>Озорники</div>
            <div style={{fontSize:12,color:"#6b7280"}}>Магазин карнавальных костюмов</div>
          </div>
        </div>
        <nav style={{display:"flex",gap:8,alignItems:"center"}}>
          <button className="btn" onClick={()=>go("home")}>Каталог</button>
</nav>
</header>
/* truncated for brevity in this package; full app included in production build */
