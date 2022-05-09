import lessToJs from 'less-vars-to-js';
import fs from 'fs';
import path from 'path';

// Read the less file in as string
debugger
const paletteLess = fs.readFileSync(path.resolve(__dirname, './less.less'), {
  encoding: 'utf8',
});

// Pass in file contents
const palette = lessToJs(paletteLess);
debugger
// Use the variables (example React component)
// export default class Palette extends Component {
//   render() {
//     return (
//       <div>
//       {
//         Object.keys(palette)
//           .forEach(colour => (
//             <div style={{ backgroundColor: palette[colour] }}>
//               <p>{ colour }</p>
//               <p>{ palette[colour] }</p>
//             </div>
//           ))
//       }
//       </div>
//     );
//   }
// }
