export class ByteBufferUtil {

    public static uint8ArrayToArrayBuffer(uint8Array: Uint8Array): ArrayBuffer {
        let arrayBuffer: ArrayBuffer = new ArrayBuffer(uint8Array.byteLength);
        new Uint8Array(arrayBuffer).set(new Uint8Array(uint8Array).subarray(0, uint8Array.byteLength), 0);
        return arrayBuffer;
    }

}