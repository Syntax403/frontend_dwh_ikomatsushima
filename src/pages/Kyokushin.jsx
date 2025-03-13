import React from "react";
import dojoKunImage from "../assets/DojoKun.jpg"; // Asegúrate de tener la imagen correcta

const Kyokushin = () => {
  const dojoKun = [
    {
      japanese: "我々は、心身を鍛錬し、厳しいしきたりを守ることを極めること",
      traduction: "Hitotsu, ware ware wa, shinshin o renmashi, kakko fubatsu no shingi o kiwameru koto",
      spanish: "Entrenaré firmemente mi corazón y mi cuerpo para tener un espíritu inconmovible...",
    },
    {
      japanese: "我々は、武の真髄を極め、気に発し、感に敏なること",
      traduction: "Hitotsu, ware ware wa, bu no shinzui o kiwame, ki ni hasshi, kan ni bin naru koto",
      spanish: "Alimentaré la verdadera significación del arte marcial del Karate, para que a un debido tiempo mis sentidos puedan actuar mejor.",
    },
    {
      japanese: "我々は、実直剛健を以て、自己の精神を養うこと",
      traduction: "Hitotsu, ware ware wa, shitsujitsu goken o motte, jiko no seishin o kanyo suru koto",
      spanish: "Con verdadero vigor procuraré cultivar el espíritu de abnegación.",
    },
    {
      japanese: "我々は、礼節を重んじ、長上を敬し、祖母の振舞をつつしむこと",
      traduction: "Hitotsu, ware ware wa, reisetsu o omonji, chojo o keishi, sobo no furumai o tsutsushimu koto",
      spanish: "Observaré las reglas de cortesía y respeto a mis superiores y me abstendré de la violencia.",
    },
    {
      japanese: "我々は、信仏を奉び、謙譲の美徳を忘れざること",
      traduction: "Hitotsu, ware ware wa, shinbutsu o toutobi, kenjo no bitoku o wasurezaru koto",
      spanish: "Seguiré a mi dios y eternas verdades y jamás olvidaré la verdadera virtud de la humildad.",
    },
    {
      japanese: "我々は、知性と体力とを高じ、他に望まざること……",
      traduction: "Hitotsu, ware ware wa, chisei to tairyoku to o kojo sase, koto ni nozonde ayamatazaru koto",
      spanish: "Miraré para lo alto, para la sabiduría y el poder, no procurando otro deseo. Toda mi vida y a través de la disciplina Karate Kyokushin, procuraré llenar la verdadera significación de la filosofía de la vida.",
    }
  ];


  const dojoRules = [
    "Saludar al entrar y salir del dojo.",
    "Mantener la disciplina y el respeto.",
    "Vestir adecuadamente el uniforme.",
    "Seguir las instrucciones del sensei.",
    "Practicar con seriedad y humildad.",
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Sección Dojo Kun */}
        <div className="text-center md:text-left">
          <div className="bg-black py-4 rounded-xl shadow-xl mb-6">
            <h2 className="text-4xl font-bold text-white text-center">Dojo Kun</h2>
          </div>
          <img src={dojoKunImage} alt="Dojo Kun" className="mx-auto md:mx-0 w-full h-auto mb-6 rounded-lg shadow-md" />
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {dojoKun.map((item, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl font-semibold text-black text-center">{item.japanese}</p>
                <p className="text-red-700 text-center italic">{item.traduction}</p>
                <p className="text-gray-700 font-medium text-center mt-2">{item.spanish}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Reglas del Dojo */}
        <div className="text-center md:text-left">
          <div className="bg-red-700 py-4 rounded-xl shadow-xl mb-6">
            <h2 className="text-3xl font-bold text-white text-center">Reglas del Dojo</h2>
          </div>
          <ul className="bg-white p-6 rounded-lg shadow-lg text-lg text-gray-800 space-y-4">
            {dojoRules.map((rule, index) => (
              <li key={index} className="font-medium border-b pb-2 last:border-b-0">{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Kyokushin;
