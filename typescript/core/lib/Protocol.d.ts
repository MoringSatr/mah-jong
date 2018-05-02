import * as $protobuf from "protobufjs";

/** Namespace coreProto. */
export namespace coreProto {

    /** Properties of a Message. */
    interface IMessage {

        /** Message cmd */
        cmd?: (number|null);

        /** Message body */
        body?: (Uint8Array|null);
    }

    /** 通讯消息 */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IMessage);

        /** Message cmd. */
        public cmd: number;

        /** Message body. */
        public body: Uint8Array;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: coreProto.IMessage): coreProto.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link coreProto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link coreProto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): coreProto.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntMsg. */
    interface IIntMsg {

        /** IntMsg value */
        value?: (number|null);
    }

    /** 基础数据类型 - int */
    class IntMsg implements IIntMsg {

        /**
         * Constructs a new IntMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IIntMsg);

        /** IntMsg value. */
        public value: number;

        /**
         * Creates a new IntMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntMsg instance
         */
        public static create(properties?: coreProto.IIntMsg): coreProto.IntMsg;

        /**
         * Encodes the specified IntMsg message. Does not implicitly {@link coreProto.IntMsg.verify|verify} messages.
         * @param message IntMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IIntMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntMsg message, length delimited. Does not implicitly {@link coreProto.IntMsg.verify|verify} messages.
         * @param message IntMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IIntMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.IntMsg;

        /**
         * Decodes an IntMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.IntMsg;

        /**
         * Verifies an IntMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.IntMsg;

        /**
         * Creates a plain object from an IntMsg message. Also converts values to other types if specified.
         * @param message IntMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.IntMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LongMsg. */
    interface ILongMsg {

        /** LongMsg value */
        value?: (number|Long|null);
    }

    /** 基础数据类型 - long */
    class LongMsg implements ILongMsg {

        /**
         * Constructs a new LongMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.ILongMsg);

        /** LongMsg value. */
        public value: (number|Long);

        /**
         * Creates a new LongMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongMsg instance
         */
        public static create(properties?: coreProto.ILongMsg): coreProto.LongMsg;

        /**
         * Encodes the specified LongMsg message. Does not implicitly {@link coreProto.LongMsg.verify|verify} messages.
         * @param message LongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.ILongMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongMsg message, length delimited. Does not implicitly {@link coreProto.LongMsg.verify|verify} messages.
         * @param message LongMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.ILongMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.LongMsg;

        /**
         * Decodes a LongMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.LongMsg;

        /**
         * Verifies a LongMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.LongMsg;

        /**
         * Creates a plain object from a LongMsg message. Also converts values to other types if specified.
         * @param message LongMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.LongMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DoubleMsg. */
    interface IDoubleMsg {

        /** DoubleMsg value */
        value?: (number|null);
    }

    /** 基础数据类型 - double */
    class DoubleMsg implements IDoubleMsg {

        /**
         * Constructs a new DoubleMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IDoubleMsg);

        /** DoubleMsg value. */
        public value: number;

        /**
         * Creates a new DoubleMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoubleMsg instance
         */
        public static create(properties?: coreProto.IDoubleMsg): coreProto.DoubleMsg;

        /**
         * Encodes the specified DoubleMsg message. Does not implicitly {@link coreProto.DoubleMsg.verify|verify} messages.
         * @param message DoubleMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IDoubleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoubleMsg message, length delimited. Does not implicitly {@link coreProto.DoubleMsg.verify|verify} messages.
         * @param message DoubleMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IDoubleMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoubleMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoubleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.DoubleMsg;

        /**
         * Decodes a DoubleMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoubleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.DoubleMsg;

        /**
         * Verifies a DoubleMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DoubleMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoubleMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.DoubleMsg;

        /**
         * Creates a plain object from a DoubleMsg message. Also converts values to other types if specified.
         * @param message DoubleMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.DoubleMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoubleMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FloatMsg. */
    interface IFloatMsg {

        /** FloatMsg value */
        value?: (number|null);
    }

    /** 基础数据类型 - float */
    class FloatMsg implements IFloatMsg {

        /**
         * Constructs a new FloatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IFloatMsg);

        /** FloatMsg value. */
        public value: number;

        /**
         * Creates a new FloatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FloatMsg instance
         */
        public static create(properties?: coreProto.IFloatMsg): coreProto.FloatMsg;

        /**
         * Encodes the specified FloatMsg message. Does not implicitly {@link coreProto.FloatMsg.verify|verify} messages.
         * @param message FloatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IFloatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FloatMsg message, length delimited. Does not implicitly {@link coreProto.FloatMsg.verify|verify} messages.
         * @param message FloatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IFloatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FloatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FloatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.FloatMsg;

        /**
         * Decodes a FloatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FloatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.FloatMsg;

        /**
         * Verifies a FloatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FloatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloatMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.FloatMsg;

        /**
         * Creates a plain object from a FloatMsg message. Also converts values to other types if specified.
         * @param message FloatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.FloatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringMsg. */
    interface IStringMsg {

        /** StringMsg value */
        value?: (string|null);
    }

    /** 基础数据类型 - string */
    class StringMsg implements IStringMsg {

        /**
         * Constructs a new StringMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IStringMsg);

        /** StringMsg value. */
        public value: string;

        /**
         * Creates a new StringMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringMsg instance
         */
        public static create(properties?: coreProto.IStringMsg): coreProto.StringMsg;

        /**
         * Encodes the specified StringMsg message. Does not implicitly {@link coreProto.StringMsg.verify|verify} messages.
         * @param message StringMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IStringMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringMsg message, length delimited. Does not implicitly {@link coreProto.StringMsg.verify|verify} messages.
         * @param message StringMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IStringMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.StringMsg;

        /**
         * Decodes a StringMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.StringMsg;

        /**
         * Verifies a StringMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.StringMsg;

        /**
         * Creates a plain object from a StringMsg message. Also converts values to other types if specified.
         * @param message StringMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.StringMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BooleanMsg. */
    interface IBooleanMsg {

        /** BooleanMsg value */
        value?: (boolean|null);
    }

    /** 基础数据类型 - boolean */
    class BooleanMsg implements IBooleanMsg {

        /**
         * Constructs a new BooleanMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IBooleanMsg);

        /** BooleanMsg value. */
        public value: boolean;

        /**
         * Creates a new BooleanMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanMsg instance
         */
        public static create(properties?: coreProto.IBooleanMsg): coreProto.BooleanMsg;

        /**
         * Encodes the specified BooleanMsg message. Does not implicitly {@link coreProto.BooleanMsg.verify|verify} messages.
         * @param message BooleanMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IBooleanMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanMsg message, length delimited. Does not implicitly {@link coreProto.BooleanMsg.verify|verify} messages.
         * @param message BooleanMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IBooleanMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.BooleanMsg;

        /**
         * Decodes a BooleanMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.BooleanMsg;

        /**
         * Verifies a BooleanMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BooleanMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.BooleanMsg;

        /**
         * Creates a plain object from a BooleanMsg message. Also converts values to other types if specified.
         * @param message BooleanMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.BooleanMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntsMsg. */
    interface IIntsMsg {

        /** IntsMsg value */
        value?: (number[]|null);
    }

    /** 基础数据类型 - int list */
    class IntsMsg implements IIntsMsg {

        /**
         * Constructs a new IntsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IIntsMsg);

        /** IntsMsg value. */
        public value: number[];

        /**
         * Creates a new IntsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntsMsg instance
         */
        public static create(properties?: coreProto.IIntsMsg): coreProto.IntsMsg;

        /**
         * Encodes the specified IntsMsg message. Does not implicitly {@link coreProto.IntsMsg.verify|verify} messages.
         * @param message IntsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IIntsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntsMsg message, length delimited. Does not implicitly {@link coreProto.IntsMsg.verify|verify} messages.
         * @param message IntsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IIntsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.IntsMsg;

        /**
         * Decodes an IntsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.IntsMsg;

        /**
         * Verifies an IntsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntsMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.IntsMsg;

        /**
         * Creates a plain object from an IntsMsg message. Also converts values to other types if specified.
         * @param message IntsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.IntsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LongsMsg. */
    interface ILongsMsg {

        /** LongsMsg value */
        value?: ((number|Long)[]|null);
    }

    /** 基础数据类型 - long list */
    class LongsMsg implements ILongsMsg {

        /**
         * Constructs a new LongsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.ILongsMsg);

        /** LongsMsg value. */
        public value: (number|Long)[];

        /**
         * Creates a new LongsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongsMsg instance
         */
        public static create(properties?: coreProto.ILongsMsg): coreProto.LongsMsg;

        /**
         * Encodes the specified LongsMsg message. Does not implicitly {@link coreProto.LongsMsg.verify|verify} messages.
         * @param message LongsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.ILongsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongsMsg message, length delimited. Does not implicitly {@link coreProto.LongsMsg.verify|verify} messages.
         * @param message LongsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.ILongsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.LongsMsg;

        /**
         * Decodes a LongsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.LongsMsg;

        /**
         * Verifies a LongsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongsMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.LongsMsg;

        /**
         * Creates a plain object from a LongsMsg message. Also converts values to other types if specified.
         * @param message LongsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.LongsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringsMsg. */
    interface IStringsMsg {

        /** StringsMsg value */
        value?: (string[]|null);
    }

    /** 基础数据类型 - string list */
    class StringsMsg implements IStringsMsg {

        /**
         * Constructs a new StringsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IStringsMsg);

        /** StringsMsg value. */
        public value: string[];

        /**
         * Creates a new StringsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringsMsg instance
         */
        public static create(properties?: coreProto.IStringsMsg): coreProto.StringsMsg;

        /**
         * Encodes the specified StringsMsg message. Does not implicitly {@link coreProto.StringsMsg.verify|verify} messages.
         * @param message StringsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IStringsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringsMsg message, length delimited. Does not implicitly {@link coreProto.StringsMsg.verify|verify} messages.
         * @param message StringsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IStringsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.StringsMsg;

        /**
         * Decodes a StringsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.StringsMsg;

        /**
         * Verifies a StringsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringsMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.StringsMsg;

        /**
         * Creates a plain object from a StringsMsg message. Also converts values to other types if specified.
         * @param message StringsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.StringsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DoublesMsg. */
    interface IDoublesMsg {

        /** DoublesMsg value */
        value?: (number[]|null);
    }

    /** 基础数据类型 - double list */
    class DoublesMsg implements IDoublesMsg {

        /**
         * Constructs a new DoublesMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IDoublesMsg);

        /** DoublesMsg value. */
        public value: number[];

        /**
         * Creates a new DoublesMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoublesMsg instance
         */
        public static create(properties?: coreProto.IDoublesMsg): coreProto.DoublesMsg;

        /**
         * Encodes the specified DoublesMsg message. Does not implicitly {@link coreProto.DoublesMsg.verify|verify} messages.
         * @param message DoublesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IDoublesMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoublesMsg message, length delimited. Does not implicitly {@link coreProto.DoublesMsg.verify|verify} messages.
         * @param message DoublesMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IDoublesMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoublesMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoublesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.DoublesMsg;

        /**
         * Decodes a DoublesMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoublesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.DoublesMsg;

        /**
         * Verifies a DoublesMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DoublesMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoublesMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.DoublesMsg;

        /**
         * Creates a plain object from a DoublesMsg message. Also converts values to other types if specified.
         * @param message DoublesMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.DoublesMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoublesMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FloatsMsg. */
    interface IFloatsMsg {

        /** FloatsMsg value */
        value?: (number[]|null);
    }

    /** 基础数据类型 - float list */
    class FloatsMsg implements IFloatsMsg {

        /**
         * Constructs a new FloatsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IFloatsMsg);

        /** FloatsMsg value. */
        public value: number[];

        /**
         * Creates a new FloatsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FloatsMsg instance
         */
        public static create(properties?: coreProto.IFloatsMsg): coreProto.FloatsMsg;

        /**
         * Encodes the specified FloatsMsg message. Does not implicitly {@link coreProto.FloatsMsg.verify|verify} messages.
         * @param message FloatsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IFloatsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FloatsMsg message, length delimited. Does not implicitly {@link coreProto.FloatsMsg.verify|verify} messages.
         * @param message FloatsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IFloatsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FloatsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FloatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.FloatsMsg;

        /**
         * Decodes a FloatsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FloatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.FloatsMsg;

        /**
         * Verifies a FloatsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FloatsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloatsMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.FloatsMsg;

        /**
         * Creates a plain object from a FloatsMsg message. Also converts values to other types if specified.
         * @param message FloatsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.FloatsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FloatsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntIntMapMsg. */
    interface IIntIntMapMsg {

        /** IntIntMapMsg value */
        value?: ({ [k: string]: number }|null);
    }

    /** 基础数据类型 - int int map */
    class IntIntMapMsg implements IIntIntMapMsg {

        /**
         * Constructs a new IntIntMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IIntIntMapMsg);

        /** IntIntMapMsg value. */
        public value: { [k: string]: number };

        /**
         * Creates a new IntIntMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntIntMapMsg instance
         */
        public static create(properties?: coreProto.IIntIntMapMsg): coreProto.IntIntMapMsg;

        /**
         * Encodes the specified IntIntMapMsg message. Does not implicitly {@link coreProto.IntIntMapMsg.verify|verify} messages.
         * @param message IntIntMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IIntIntMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntIntMapMsg message, length delimited. Does not implicitly {@link coreProto.IntIntMapMsg.verify|verify} messages.
         * @param message IntIntMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IIntIntMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntIntMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.IntIntMapMsg;

        /**
         * Decodes an IntIntMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.IntIntMapMsg;

        /**
         * Verifies an IntIntMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntIntMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntIntMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.IntIntMapMsg;

        /**
         * Creates a plain object from an IntIntMapMsg message. Also converts values to other types if specified.
         * @param message IntIntMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.IntIntMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntIntMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntLongMapMsg. */
    interface IIntLongMapMsg {

        /** IntLongMapMsg value */
        value?: ({ [k: string]: (number|Long) }|null);
    }

    /** 基础数据类型 - int long map */
    class IntLongMapMsg implements IIntLongMapMsg {

        /**
         * Constructs a new IntLongMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IIntLongMapMsg);

        /** IntLongMapMsg value. */
        public value: { [k: string]: (number|Long) };

        /**
         * Creates a new IntLongMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntLongMapMsg instance
         */
        public static create(properties?: coreProto.IIntLongMapMsg): coreProto.IntLongMapMsg;

        /**
         * Encodes the specified IntLongMapMsg message. Does not implicitly {@link coreProto.IntLongMapMsg.verify|verify} messages.
         * @param message IntLongMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IIntLongMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntLongMapMsg message, length delimited. Does not implicitly {@link coreProto.IntLongMapMsg.verify|verify} messages.
         * @param message IntLongMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IIntLongMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntLongMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.IntLongMapMsg;

        /**
         * Decodes an IntLongMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.IntLongMapMsg;

        /**
         * Verifies an IntLongMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntLongMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntLongMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.IntLongMapMsg;

        /**
         * Creates a plain object from an IntLongMapMsg message. Also converts values to other types if specified.
         * @param message IntLongMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.IntLongMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntLongMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntStringMapMsg. */
    interface IIntStringMapMsg {

        /** IntStringMapMsg value */
        value?: ({ [k: string]: string }|null);
    }

    /** 基础数据类型 - int string map */
    class IntStringMapMsg implements IIntStringMapMsg {

        /**
         * Constructs a new IntStringMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.IIntStringMapMsg);

        /** IntStringMapMsg value. */
        public value: { [k: string]: string };

        /**
         * Creates a new IntStringMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntStringMapMsg instance
         */
        public static create(properties?: coreProto.IIntStringMapMsg): coreProto.IntStringMapMsg;

        /**
         * Encodes the specified IntStringMapMsg message. Does not implicitly {@link coreProto.IntStringMapMsg.verify|verify} messages.
         * @param message IntStringMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.IIntStringMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntStringMapMsg message, length delimited. Does not implicitly {@link coreProto.IntStringMapMsg.verify|verify} messages.
         * @param message IntStringMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.IIntStringMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntStringMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.IntStringMapMsg;

        /**
         * Decodes an IntStringMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.IntStringMapMsg;

        /**
         * Verifies an IntStringMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntStringMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntStringMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.IntStringMapMsg;

        /**
         * Creates a plain object from an IntStringMapMsg message. Also converts values to other types if specified.
         * @param message IntStringMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.IntStringMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntStringMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LongLongMapMsg. */
    interface ILongLongMapMsg {

        /** LongLongMapMsg value */
        value?: ({ [k: string]: (number|Long) }|null);
    }

    /** 基础数据类型 - long long map */
    class LongLongMapMsg implements ILongLongMapMsg {

        /**
         * Constructs a new LongLongMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.ILongLongMapMsg);

        /** LongLongMapMsg value. */
        public value: { [k: string]: (number|Long) };

        /**
         * Creates a new LongLongMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongLongMapMsg instance
         */
        public static create(properties?: coreProto.ILongLongMapMsg): coreProto.LongLongMapMsg;

        /**
         * Encodes the specified LongLongMapMsg message. Does not implicitly {@link coreProto.LongLongMapMsg.verify|verify} messages.
         * @param message LongLongMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.ILongLongMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongLongMapMsg message, length delimited. Does not implicitly {@link coreProto.LongLongMapMsg.verify|verify} messages.
         * @param message LongLongMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.ILongLongMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongLongMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.LongLongMapMsg;

        /**
         * Decodes a LongLongMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.LongLongMapMsg;

        /**
         * Verifies a LongLongMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongLongMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongLongMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.LongLongMapMsg;

        /**
         * Creates a plain object from a LongLongMapMsg message. Also converts values to other types if specified.
         * @param message LongLongMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.LongLongMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongLongMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LongIntMapMsg. */
    interface ILongIntMapMsg {

        /** LongIntMapMsg value */
        value?: ({ [k: string]: number }|null);
    }

    /** 基础数据类型 - long int map */
    class LongIntMapMsg implements ILongIntMapMsg {

        /**
         * Constructs a new LongIntMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.ILongIntMapMsg);

        /** LongIntMapMsg value. */
        public value: { [k: string]: number };

        /**
         * Creates a new LongIntMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongIntMapMsg instance
         */
        public static create(properties?: coreProto.ILongIntMapMsg): coreProto.LongIntMapMsg;

        /**
         * Encodes the specified LongIntMapMsg message. Does not implicitly {@link coreProto.LongIntMapMsg.verify|verify} messages.
         * @param message LongIntMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.ILongIntMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongIntMapMsg message, length delimited. Does not implicitly {@link coreProto.LongIntMapMsg.verify|verify} messages.
         * @param message LongIntMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.ILongIntMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongIntMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.LongIntMapMsg;

        /**
         * Decodes a LongIntMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.LongIntMapMsg;

        /**
         * Verifies a LongIntMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongIntMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongIntMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.LongIntMapMsg;

        /**
         * Creates a plain object from a LongIntMapMsg message. Also converts values to other types if specified.
         * @param message LongIntMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.LongIntMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongIntMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LongStringMapMsg. */
    interface ILongStringMapMsg {

        /** LongStringMapMsg value */
        value?: ({ [k: string]: string }|null);
    }

    /** 基础数据类型 - long string map */
    class LongStringMapMsg implements ILongStringMapMsg {

        /**
         * Constructs a new LongStringMapMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: coreProto.ILongStringMapMsg);

        /** LongStringMapMsg value. */
        public value: { [k: string]: string };

        /**
         * Creates a new LongStringMapMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LongStringMapMsg instance
         */
        public static create(properties?: coreProto.ILongStringMapMsg): coreProto.LongStringMapMsg;

        /**
         * Encodes the specified LongStringMapMsg message. Does not implicitly {@link coreProto.LongStringMapMsg.verify|verify} messages.
         * @param message LongStringMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coreProto.ILongStringMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LongStringMapMsg message, length delimited. Does not implicitly {@link coreProto.LongStringMapMsg.verify|verify} messages.
         * @param message LongStringMapMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: coreProto.ILongStringMapMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LongStringMapMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LongStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): coreProto.LongStringMapMsg;

        /**
         * Decodes a LongStringMapMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LongStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): coreProto.LongStringMapMsg;

        /**
         * Verifies a LongStringMapMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LongStringMapMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LongStringMapMsg
         */
        public static fromObject(object: { [k: string]: any }): coreProto.LongStringMapMsg;

        /**
         * Creates a plain object from a LongStringMapMsg message. Also converts values to other types if specified.
         * @param message LongStringMapMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coreProto.LongStringMapMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LongStringMapMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gameProto. */
export namespace gameProto {

    /** 游戏类型 */
    enum GameType {
        TUI_TONG_ZI = 0,
        KA_WU_XING = 1,
        XUE_LIU_CHENG_HE = 2,
        XUE_ZHAN_DAO_DI = 3
    }
}

/** Namespace playerProto. */
export namespace playerProto {

    /** 玩家状态信息 */
    enum PlayerState {
        ONLINE = 0,
        OFFLINE = 1,
        IN_GAME = 2
    }

    /** Properties of a SimplePlayerMsg. */
    interface ISimplePlayerMsg {

        /** SimplePlayerMsg playerId */
        playerId?: (number|Long|null);

        /** SimplePlayerMsg nickname */
        nickname?: (string|null);

        /** SimplePlayerMsg headImage */
        headImage?: (string|null);

        /** SimplePlayerMsg state */
        state?: (playerProto.PlayerState|null);
    }

    /** 基础玩家信息 */
    class SimplePlayerMsg implements ISimplePlayerMsg {

        /**
         * Constructs a new SimplePlayerMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerProto.ISimplePlayerMsg);

        /** SimplePlayerMsg playerId. */
        public playerId: (number|Long);

        /** SimplePlayerMsg nickname. */
        public nickname: string;

        /** SimplePlayerMsg headImage. */
        public headImage: string;

        /** SimplePlayerMsg state. */
        public state: playerProto.PlayerState;

        /**
         * Creates a new SimplePlayerMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimplePlayerMsg instance
         */
        public static create(properties?: playerProto.ISimplePlayerMsg): playerProto.SimplePlayerMsg;

        /**
         * Encodes the specified SimplePlayerMsg message. Does not implicitly {@link playerProto.SimplePlayerMsg.verify|verify} messages.
         * @param message SimplePlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerProto.ISimplePlayerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SimplePlayerMsg message, length delimited. Does not implicitly {@link playerProto.SimplePlayerMsg.verify|verify} messages.
         * @param message SimplePlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerProto.ISimplePlayerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimplePlayerMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimplePlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerProto.SimplePlayerMsg;

        /**
         * Decodes a SimplePlayerMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimplePlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerProto.SimplePlayerMsg;

        /**
         * Verifies a SimplePlayerMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SimplePlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SimplePlayerMsg
         */
        public static fromObject(object: { [k: string]: any }): playerProto.SimplePlayerMsg;

        /**
         * Creates a plain object from a SimplePlayerMsg message. Also converts values to other types if specified.
         * @param message SimplePlayerMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerProto.SimplePlayerMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SimplePlayerMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerMsg. */
    interface IPlayerMsg {

        /** PlayerMsg simplePlayer */
        simplePlayer?: (playerProto.ISimplePlayerMsg|null);

        /** PlayerMsg roomCardNum */
        roomCardNum?: (number|null);
    }

    /** 玩家信息 */
    class PlayerMsg implements IPlayerMsg {

        /**
         * Constructs a new PlayerMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: playerProto.IPlayerMsg);

        /** PlayerMsg simplePlayer. */
        public simplePlayer?: (playerProto.ISimplePlayerMsg|null);

        /** PlayerMsg roomCardNum. */
        public roomCardNum: number;

        /**
         * Creates a new PlayerMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMsg instance
         */
        public static create(properties?: playerProto.IPlayerMsg): playerProto.PlayerMsg;

        /**
         * Encodes the specified PlayerMsg message. Does not implicitly {@link playerProto.PlayerMsg.verify|verify} messages.
         * @param message PlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: playerProto.IPlayerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerMsg message, length delimited. Does not implicitly {@link playerProto.PlayerMsg.verify|verify} messages.
         * @param message PlayerMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: playerProto.IPlayerMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerProto.PlayerMsg;

        /**
         * Decodes a PlayerMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerProto.PlayerMsg;

        /**
         * Verifies a PlayerMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerMsg
         */
        public static fromObject(object: { [k: string]: any }): playerProto.PlayerMsg;

        /**
         * Creates a plain object from a PlayerMsg message. Also converts values to other types if specified.
         * @param message PlayerMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: playerProto.PlayerMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace roomProto. */
export namespace roomProto {

    /** Properties of a RoomMsg. */
    interface IRoomMsg {

        /** RoomMsg roomId */
        roomId?: (number|null);

        /** RoomMsg players */
        players?: (roomProto.IRoomPlayer[]|null);

        /** RoomMsg gameType */
        gameType?: (gameProto.GameType|null);
    }

    /** 房间消息 */
    class RoomMsg implements IRoomMsg {

        /**
         * Constructs a new RoomMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: roomProto.IRoomMsg);

        /** RoomMsg roomId. */
        public roomId: number;

        /** RoomMsg players. */
        public players: roomProto.IRoomPlayer[];

        /** RoomMsg gameType. */
        public gameType: gameProto.GameType;

        /**
         * Creates a new RoomMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomMsg instance
         */
        public static create(properties?: roomProto.IRoomMsg): roomProto.RoomMsg;

        /**
         * Encodes the specified RoomMsg message. Does not implicitly {@link roomProto.RoomMsg.verify|verify} messages.
         * @param message RoomMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roomProto.IRoomMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomMsg message, length delimited. Does not implicitly {@link roomProto.RoomMsg.verify|verify} messages.
         * @param message RoomMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roomProto.IRoomMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomProto.RoomMsg;

        /**
         * Decodes a RoomMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomProto.RoomMsg;

        /**
         * Verifies a RoomMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomMsg
         */
        public static fromObject(object: { [k: string]: any }): roomProto.RoomMsg;

        /**
         * Creates a plain object from a RoomMsg message. Also converts values to other types if specified.
         * @param message RoomMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roomProto.RoomMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomPlayer. */
    interface IRoomPlayer {

        /** RoomPlayer simplePlayer */
        simplePlayer?: (playerProto.ISimplePlayerMsg|null);
    }

    /** 房间中玩家信息 */
    class RoomPlayer implements IRoomPlayer {

        /**
         * Constructs a new RoomPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: roomProto.IRoomPlayer);

        /** RoomPlayer simplePlayer. */
        public simplePlayer?: (playerProto.ISimplePlayerMsg|null);

        /**
         * Creates a new RoomPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomPlayer instance
         */
        public static create(properties?: roomProto.IRoomPlayer): roomProto.RoomPlayer;

        /**
         * Encodes the specified RoomPlayer message. Does not implicitly {@link roomProto.RoomPlayer.verify|verify} messages.
         * @param message RoomPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roomProto.IRoomPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomPlayer message, length delimited. Does not implicitly {@link roomProto.RoomPlayer.verify|verify} messages.
         * @param message RoomPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roomProto.IRoomPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roomProto.RoomPlayer;

        /**
         * Decodes a RoomPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roomProto.RoomPlayer;

        /**
         * Verifies a RoomPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomPlayer
         */
        public static fromObject(object: { [k: string]: any }): roomProto.RoomPlayer;

        /**
         * Creates a plain object from a RoomPlayer message. Also converts values to other types if specified.
         * @param message RoomPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roomProto.RoomPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace settingsProto. */
export namespace settingsProto {

    /** Properties of a SettingsMsg. */
    interface ISettingsMsg {

        /** SettingsMsg backgroundMusic */
        backgroundMusic?: (number|null);

        /** SettingsMsg soundEffect */
        soundEffect?: (number|null);
    }

    /** 用户设置信息 */
    class SettingsMsg implements ISettingsMsg {

        /**
         * Constructs a new SettingsMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: settingsProto.ISettingsMsg);

        /** SettingsMsg backgroundMusic. */
        public backgroundMusic: number;

        /** SettingsMsg soundEffect. */
        public soundEffect: number;

        /**
         * Creates a new SettingsMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingsMsg instance
         */
        public static create(properties?: settingsProto.ISettingsMsg): settingsProto.SettingsMsg;

        /**
         * Encodes the specified SettingsMsg message. Does not implicitly {@link settingsProto.SettingsMsg.verify|verify} messages.
         * @param message SettingsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: settingsProto.ISettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingsMsg message, length delimited. Does not implicitly {@link settingsProto.SettingsMsg.verify|verify} messages.
         * @param message SettingsMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: settingsProto.ISettingsMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingsMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): settingsProto.SettingsMsg;

        /**
         * Decodes a SettingsMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): settingsProto.SettingsMsg;

        /**
         * Verifies a SettingsMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingsMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingsMsg
         */
        public static fromObject(object: { [k: string]: any }): settingsProto.SettingsMsg;

        /**
         * Creates a plain object from a SettingsMsg message. Also converts values to other types if specified.
         * @param message SettingsMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: settingsProto.SettingsMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingsMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace userProto. */
export namespace userProto {

    /** Properties of a UserMsg. */
    interface IUserMsg {

        /** UserMsg userId */
        userId?: (number|Long|null);

        /** UserMsg name */
        name?: (string|null);

        /** UserMsg headImage */
        headImage?: (string|null);

        /** UserMsg gender */
        gender?: (userProto.Gender|null);
    }

    /** 用户信息 */
    class UserMsg implements IUserMsg {

        /**
         * Constructs a new UserMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: userProto.IUserMsg);

        /** UserMsg userId. */
        public userId: (number|Long);

        /** UserMsg name. */
        public name: string;

        /** UserMsg headImage. */
        public headImage: string;

        /** UserMsg gender. */
        public gender: userProto.Gender;

        /**
         * Creates a new UserMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMsg instance
         */
        public static create(properties?: userProto.IUserMsg): userProto.UserMsg;

        /**
         * Encodes the specified UserMsg message. Does not implicitly {@link userProto.UserMsg.verify|verify} messages.
         * @param message UserMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: userProto.IUserMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMsg message, length delimited. Does not implicitly {@link userProto.UserMsg.verify|verify} messages.
         * @param message UserMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: userProto.IUserMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): userProto.UserMsg;

        /**
         * Decodes a UserMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): userProto.UserMsg;

        /**
         * Verifies a UserMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMsg
         */
        public static fromObject(object: { [k: string]: any }): userProto.UserMsg;

        /**
         * Creates a plain object from a UserMsg message. Also converts values to other types if specified.
         * @param message UserMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: userProto.UserMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Gender enum. */
    enum Gender {
        FEMALE = 0,
        MALE = 1,
        UNKNOW = 3
    }
}
