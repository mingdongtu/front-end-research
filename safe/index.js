const workercode = () => {
    self.importScripts('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.6/xlsx.mini.min.js');
    self.onmessage = function(e) {
        const workbook = self.XLSX.read(e.data, { type: 'array' });
        this.postMessage(workbook);
    };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });
const workerScript = URL.createObjectURL(blob); // 将子线程的逻辑处理成一个url
export default workerScript;