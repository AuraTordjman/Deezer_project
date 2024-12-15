import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState<"loading" | "icon" | "disabled">("icon"); // Mode par défaut

  const sizes = ["btn-sm", "btn-md", "btn-lg", "btn-xl"];
  const colors = [
    { class: "btn btn-violet" },
    { class: "btn btn-black" },
    { class: "btn btn-transparent-violet" },
    { class: "btn btn-transparent-black" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-sans font-bold mb-6 text-center">Boutons - Modes dynamiques</h1>

      {/* Sélecteur de mode */}
      <div className="flex justify-center gap-4 mb-8">
        <label>
          <select
            className="py-2 px-4 border rounded"
            onChange={(e) => setMode(e.target.value as "loading" | "icon" | "disabled")}
            value={mode}
          >
            <option value="loading">Mode Loading</option>
            <option value="icon">Avec Icône</option>
            <option value="disabled">Mode Disabled</option>
          </select>
        </label>
      </div>

      {/* Grille de boutons */}
      <div className="flex flex-col gap-8">
        {sizes.map((size) => (
          <div key={size} className="grid grid-cols-4 gap-4">
            {colors.map((color, index) => (
              <button
                key={`${size}-${index}`}
                className={`${color.class} ${size} flex items-center justify-center gap-2 ${
                  mode === "disabled" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={mode === "disabled"} // Désactive le bouton si mode = disabled
              >
                {/* Mode Loading */}
                {mode === "loading" && (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="font-sans opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </>
                )}

                {/* Mode Icône */}
                {mode === "icon" && (
                  <>
                    <svg
                      className=" font-sans fill-current w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Button</span>
                  </>
                )}

                {/* Mode Disabled */}
                {mode === "disabled" && <span>Disabled</span>}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
