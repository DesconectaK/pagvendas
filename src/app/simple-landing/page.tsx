
// src/app/simple-landing/page.tsx
export default function SimpleLandingPage() {
  const htmlSnippets = [
    // Snippet 1
    `<div class="section" style="text-align:center;">
      <h1>📵 ELE NÃO LARGAVA O CELULAR…</h1>
      <p style="margin-top:12px;">
        Ela tentou de tudo: gritou, castigou, escondeu o tablet…  
        <br><span style="color:#d32f2f; font-weight:600;">Nada funcionava.</span>
      </p>
      <p style="margin-top:12px;">
        Até que descobriu um <span style="color:#ff6f00;"><strong>método simples</strong></span> que devolveu a paz em casa em menos de 7 dias.  
        <br>Hoje, ele brinca por horas sem lembrar do celular.
      </p>
      <a href="#checkout" class="cta-btn">🔥 QUERO ACESSAR O MÉTODO</a>
    </div>`,
    // Snippet 2
    `<div class="section" style="background-color:#fff3e0; border-left:4px solid #ff6f00;">
      <p style="font-weight:600; text-align:center;">
        ⛔ <span style="color:#d32f2f;">Você está a um passo de deixar tudo como está.</span><br>
        Ou de descobrir o método que já transformou +7.200 famílias.
      </p>
    </div>`,
    // Snippet 3
    `<div class="section">
      <h2 style="color:#1a1a1a; text-align:center;">🎯 SEU FILHO NÃO É O PROBLEMA.</h2>
      <p style="margin-top:12px; text-align:center;">
        Você só não recebeu a orientação certa.  
        <br><br>
        Este método foi criado por mães reais, para mães reais.  
        <strong>Sem fórmulas mágicas.</strong> Só o passo a passo do que funciona.
      </p>
    </div>`,
    // Snippet 4
    `<div class="section" style="background-color:#e8f5e9; border-left:4px solid #43a047;">
      <p style="text-align:center;">
        ✅ Acesso vitalício imediato por <strong style="color:#ff6f00;">menos de R$20</strong><br>
        🔁 Garantia de 7 dias: <strong>não funcionou?</strong> Seu dinheiro de volta.
      </p>
    </div>`,
    // Snippet 5
    `<div class="section" style="background-color:#fff8e1; text-align:center;">
      <p style="color:#d84315; font-weight:600;">
        ⚠️ Oferta válida apenas até hoje, 23h59.
      </p>
      <p>
        Após esse prazo, <span style="color:#d32f2f;"><strong>não garantimos o mesmo valor ou acesso vitalício.</strong></span>
      </p>
    </div>`,
    // Snippet 6
    `<div class="section" style="background-color:#ffebee; border-left:4px solid #d32f2f;">
      <h3 style="color:#d32f2f;">❌ O QUE NÃO FUNCIONOU PRA ELA:</h3>
      <ul style="margin-top:10px;">
        <li>Gritar e tirar o celular à força</li>
        <li>Prometer brinquedo pra cada pausa</li>
        <li>Ignorar e esperar “crescer”</li>
        <li>Apps de controle que a criança burlava</li>
      </ul>
    </div>`
  ];

  const lastSnippet = 
    `<div class="section" style="text-align:center;">
      <p style="font-size:18px; font-weight:600;">
        Não pense demais. A chance está aqui.  
        <br><span style="color:#d32f2f;">Saia agora ou mude sua casa ainda hoje.</span>
      </p>
      <a href="#checkout" class="cta-btn">🔓 QUERO TRANSFORMAR MEU LAR AGORA</a>
    </div>`;

  return (
    <>
      {htmlSnippets.map((snippet, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: snippet }} />
      ))}
      {/* The id="checkout" is placed here to be the target for the CTA buttons */}
      <div id="checkout">
        <div dangerouslySetInnerHTML={{ __html: lastSnippet }} />
      </div>
    </>
  );
}
