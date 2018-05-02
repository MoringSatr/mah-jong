/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var $protobuf = require("protobuf");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.coreProto = function () {
    /**
     * Namespace coreProto.
     * @exports coreProto
     * @namespace
     */
    var coreProto = {};
    coreProto.Message = function () {
        /**
         * Properties of a Message.
         * @memberof coreProto
         * @interface IMessage
         * @property {number|null} [cmd] Message cmd
         * @property {Uint8Array|null} [body] Message body
         */
        /**
         * Constructs a new Message.
         * @memberof coreProto
         * @classdesc 通讯消息
         * @implements IMessage
         * @constructor
         * @param {coreProto.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * Message cmd.
         * @member {number} cmd
         * @memberof coreProto.Message
         * @instance
         */
        Message.prototype.cmd = 0;
        /**
         * Message body.
         * @member {Uint8Array} body
         * @memberof coreProto.Message
         * @instance
         */
        Message.prototype.body = $util.newBuffer([]);
        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof coreProto.Message
         * @static
         * @param {coreProto.IMessage=} [properties] Properties to set
         * @returns {coreProto.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };
        /**
         * Encodes the specified Message message. Does not implicitly {@link coreProto.Message.verify|verify} messages.
         * @function encode
         * @memberof coreProto.Message
         * @static
         * @param {coreProto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.cmd);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/ 18).bytes(message.body);
            return writer;
        };
        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link coreProto.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.Message
         * @static
         * @param {coreProto.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.cmd = reader.int32();
                        break;
                    case 2:
                        message.body = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a Message message.
         * @function verify
         * @memberof coreProto.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };
        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.Message)
                return object;
            var message = new $root.coreProto.Message();
            if (object.cmd != null)
                message.cmd = object.cmd | 0;
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };
        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.Message
         * @static
         * @param {coreProto.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = 0;
                object.body = options.bytes === String ? "" : [];
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };
        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof coreProto.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Message;
    }();
    coreProto.IntMsg = function () {
        /**
         * Properties of an IntMsg.
         * @memberof coreProto
         * @interface IIntMsg
         * @property {number|null} [value] IntMsg value
         */
        /**
         * Constructs a new IntMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - int
         * @implements IIntMsg
         * @constructor
         * @param {coreProto.IIntMsg=} [properties] Properties to set
         */
        function IntMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * IntMsg value.
         * @member {number} value
         * @memberof coreProto.IntMsg
         * @instance
         */
        IntMsg.prototype.value = 0;
        /**
         * Creates a new IntMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.IntMsg
         * @static
         * @param {coreProto.IIntMsg=} [properties] Properties to set
         * @returns {coreProto.IntMsg} IntMsg instance
         */
        IntMsg.create = function create(properties) {
            return new IntMsg(properties);
        };
        /**
         * Encodes the specified IntMsg message. Does not implicitly {@link coreProto.IntMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.IntMsg
         * @static
         * @param {coreProto.IIntMsg} message IntMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
            return writer;
        };
        /**
         * Encodes the specified IntMsg message, length delimited. Does not implicitly {@link coreProto.IntMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.IntMsg
         * @static
         * @param {coreProto.IIntMsg} message IntMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes an IntMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.IntMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.IntMsg} IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.IntMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes an IntMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.IntMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.IntMsg} IntMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies an IntMsg message.
         * @function verify
         * @memberof coreProto.IntMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };
        /**
         * Creates an IntMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.IntMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.IntMsg} IntMsg
         */
        IntMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.IntMsg)
                return object;
            var message = new $root.coreProto.IntMsg();
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };
        /**
         * Creates a plain object from an IntMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.IntMsg
         * @static
         * @param {coreProto.IntMsg} message IntMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
        /**
         * Converts this IntMsg to JSON.
         * @function toJSON
         * @memberof coreProto.IntMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntMsg;
    }();
    coreProto.LongMsg = function () {
        /**
         * Properties of a LongMsg.
         * @memberof coreProto
         * @interface ILongMsg
         * @property {number|Long|null} [value] LongMsg value
         */
        /**
         * Constructs a new LongMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - long
         * @implements ILongMsg
         * @constructor
         * @param {coreProto.ILongMsg=} [properties] Properties to set
         */
        function LongMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * LongMsg value.
         * @member {number|Long} value
         * @memberof coreProto.LongMsg
         * @instance
         */
        LongMsg.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        /**
         * Creates a new LongMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.LongMsg
         * @static
         * @param {coreProto.ILongMsg=} [properties] Properties to set
         * @returns {coreProto.LongMsg} LongMsg instance
         */
        LongMsg.create = function create(properties) {
            return new LongMsg(properties);
        };
        /**
         * Encodes the specified LongMsg message. Does not implicitly {@link coreProto.LongMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.LongMsg
         * @static
         * @param {coreProto.ILongMsg} message LongMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.value);
            return writer;
        };
        /**
         * Encodes the specified LongMsg message, length delimited. Does not implicitly {@link coreProto.LongMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.LongMsg
         * @static
         * @param {coreProto.ILongMsg} message LongMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a LongMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.LongMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.LongMsg} LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.LongMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a LongMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.LongMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.LongMsg} LongMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a LongMsg message.
         * @function verify
         * @memberof coreProto.LongMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                    return "value: integer|Long expected";
            return null;
        };
        /**
         * Creates a LongMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.LongMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.LongMsg} LongMsg
         */
        LongMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.LongMsg)
                return object;
            var message = new $root.coreProto.LongMsg();
            if (object.value != null)
                if ($util.Long)
                    (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                else if (typeof object.value === "string")
                    message.value = parseInt(object.value, 10);
                else if (typeof object.value === "number")
                    message.value = object.value;
                else if (_typeof(object.value) === "object")
                    message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
            return message;
        };
        /**
         * Creates a plain object from a LongMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.LongMsg
         * @static
         * @param {coreProto.LongMsg} message LongMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                }
                else
                    object.value = options.longs === String ? "0" : 0;
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value === "number")
                    object.value = options.longs === String ? String(message.value) : message.value;
                else
                    object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
            return object;
        };
        /**
         * Converts this LongMsg to JSON.
         * @function toJSON
         * @memberof coreProto.LongMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LongMsg;
    }();
    coreProto.DoubleMsg = function () {
        /**
         * Properties of a DoubleMsg.
         * @memberof coreProto
         * @interface IDoubleMsg
         * @property {number|null} [value] DoubleMsg value
         */
        /**
         * Constructs a new DoubleMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - double
         * @implements IDoubleMsg
         * @constructor
         * @param {coreProto.IDoubleMsg=} [properties] Properties to set
         */
        function DoubleMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * DoubleMsg value.
         * @member {number} value
         * @memberof coreProto.DoubleMsg
         * @instance
         */
        DoubleMsg.prototype.value = 0;
        /**
         * Creates a new DoubleMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {coreProto.IDoubleMsg=} [properties] Properties to set
         * @returns {coreProto.DoubleMsg} DoubleMsg instance
         */
        DoubleMsg.create = function create(properties) {
            return new DoubleMsg(properties);
        };
        /**
         * Encodes the specified DoubleMsg message. Does not implicitly {@link coreProto.DoubleMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {coreProto.IDoubleMsg} message DoubleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.value);
            return writer;
        };
        /**
         * Encodes the specified DoubleMsg message, length delimited. Does not implicitly {@link coreProto.DoubleMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {coreProto.IDoubleMsg} message DoubleMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a DoubleMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.DoubleMsg} DoubleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.DoubleMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a DoubleMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.DoubleMsg} DoubleMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a DoubleMsg message.
         * @function verify
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DoubleMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
        /**
         * Creates a DoubleMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.DoubleMsg} DoubleMsg
         */
        DoubleMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.DoubleMsg)
                return object;
            var message = new $root.coreProto.DoubleMsg();
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
        /**
         * Creates a plain object from a DoubleMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.DoubleMsg
         * @static
         * @param {coreProto.DoubleMsg} message DoubleMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DoubleMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
        /**
         * Converts this DoubleMsg to JSON.
         * @function toJSON
         * @memberof coreProto.DoubleMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DoubleMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DoubleMsg;
    }();
    coreProto.FloatMsg = function () {
        /**
         * Properties of a FloatMsg.
         * @memberof coreProto
         * @interface IFloatMsg
         * @property {number|null} [value] FloatMsg value
         */
        /**
         * Constructs a new FloatMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - float
         * @implements IFloatMsg
         * @constructor
         * @param {coreProto.IFloatMsg=} [properties] Properties to set
         */
        function FloatMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * FloatMsg value.
         * @member {number} value
         * @memberof coreProto.FloatMsg
         * @instance
         */
        FloatMsg.prototype.value = 0;
        /**
         * Creates a new FloatMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.FloatMsg
         * @static
         * @param {coreProto.IFloatMsg=} [properties] Properties to set
         * @returns {coreProto.FloatMsg} FloatMsg instance
         */
        FloatMsg.create = function create(properties) {
            return new FloatMsg(properties);
        };
        /**
         * Encodes the specified FloatMsg message. Does not implicitly {@link coreProto.FloatMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.FloatMsg
         * @static
         * @param {coreProto.IFloatMsg} message FloatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.value);
            return writer;
        };
        /**
         * Encodes the specified FloatMsg message, length delimited. Does not implicitly {@link coreProto.FloatMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.FloatMsg
         * @static
         * @param {coreProto.IFloatMsg} message FloatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a FloatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.FloatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.FloatMsg} FloatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.FloatMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a FloatMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.FloatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.FloatMsg} FloatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a FloatMsg message.
         * @function verify
         * @memberof coreProto.FloatMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FloatMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            return null;
        };
        /**
         * Creates a FloatMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.FloatMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.FloatMsg} FloatMsg
         */
        FloatMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.FloatMsg)
                return object;
            var message = new $root.coreProto.FloatMsg();
            if (object.value != null)
                message.value = Number(object.value);
            return message;
        };
        /**
         * Creates a plain object from a FloatMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.FloatMsg
         * @static
         * @param {coreProto.FloatMsg} message FloatMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloatMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = 0;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            return object;
        };
        /**
         * Converts this FloatMsg to JSON.
         * @function toJSON
         * @memberof coreProto.FloatMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloatMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return FloatMsg;
    }();
    coreProto.StringMsg = function () {
        /**
         * Properties of a StringMsg.
         * @memberof coreProto
         * @interface IStringMsg
         * @property {string|null} [value] StringMsg value
         */
        /**
         * Constructs a new StringMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - string
         * @implements IStringMsg
         * @constructor
         * @param {coreProto.IStringMsg=} [properties] Properties to set
         */
        function StringMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * StringMsg value.
         * @member {string} value
         * @memberof coreProto.StringMsg
         * @instance
         */
        StringMsg.prototype.value = "";
        /**
         * Creates a new StringMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.StringMsg
         * @static
         * @param {coreProto.IStringMsg=} [properties] Properties to set
         * @returns {coreProto.StringMsg} StringMsg instance
         */
        StringMsg.create = function create(properties) {
            return new StringMsg(properties);
        };
        /**
         * Encodes the specified StringMsg message. Does not implicitly {@link coreProto.StringMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.StringMsg
         * @static
         * @param {coreProto.IStringMsg} message StringMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.value);
            return writer;
        };
        /**
         * Encodes the specified StringMsg message, length delimited. Does not implicitly {@link coreProto.StringMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.StringMsg
         * @static
         * @param {coreProto.IStringMsg} message StringMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a StringMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.StringMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.StringMsg} StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.StringMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a StringMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.StringMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.StringMsg} StringMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a StringMsg message.
         * @function verify
         * @memberof coreProto.StringMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };
        /**
         * Creates a StringMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.StringMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.StringMsg} StringMsg
         */
        StringMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.StringMsg)
                return object;
            var message = new $root.coreProto.StringMsg();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };
        /**
         * Creates a plain object from a StringMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.StringMsg
         * @static
         * @param {coreProto.StringMsg} message StringMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
        /**
         * Converts this StringMsg to JSON.
         * @function toJSON
         * @memberof coreProto.StringMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return StringMsg;
    }();
    coreProto.BooleanMsg = function () {
        /**
         * Properties of a BooleanMsg.
         * @memberof coreProto
         * @interface IBooleanMsg
         * @property {boolean|null} [value] BooleanMsg value
         */
        /**
         * Constructs a new BooleanMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - boolean
         * @implements IBooleanMsg
         * @constructor
         * @param {coreProto.IBooleanMsg=} [properties] Properties to set
         */
        function BooleanMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * BooleanMsg value.
         * @member {boolean} value
         * @memberof coreProto.BooleanMsg
         * @instance
         */
        BooleanMsg.prototype.value = false;
        /**
         * Creates a new BooleanMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {coreProto.IBooleanMsg=} [properties] Properties to set
         * @returns {coreProto.BooleanMsg} BooleanMsg instance
         */
        BooleanMsg.create = function create(properties) {
            return new BooleanMsg(properties);
        };
        /**
         * Encodes the specified BooleanMsg message. Does not implicitly {@link coreProto.BooleanMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {coreProto.IBooleanMsg} message BooleanMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.value);
            return writer;
        };
        /**
         * Encodes the specified BooleanMsg message, length delimited. Does not implicitly {@link coreProto.BooleanMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {coreProto.IBooleanMsg} message BooleanMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BooleanMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a BooleanMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.BooleanMsg} BooleanMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.BooleanMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a BooleanMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.BooleanMsg} BooleanMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BooleanMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a BooleanMsg message.
         * @function verify
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BooleanMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "boolean")
                    return "value: boolean expected";
            return null;
        };
        /**
         * Creates a BooleanMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.BooleanMsg} BooleanMsg
         */
        BooleanMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.BooleanMsg)
                return object;
            var message = new $root.coreProto.BooleanMsg();
            if (object.value != null)
                message.value = Boolean(object.value);
            return message;
        };
        /**
         * Creates a plain object from a BooleanMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.BooleanMsg
         * @static
         * @param {coreProto.BooleanMsg} message BooleanMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BooleanMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = false;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };
        /**
         * Converts this BooleanMsg to JSON.
         * @function toJSON
         * @memberof coreProto.BooleanMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BooleanMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return BooleanMsg;
    }();
    coreProto.IntsMsg = function () {
        /**
         * Properties of an IntsMsg.
         * @memberof coreProto
         * @interface IIntsMsg
         * @property {Array.<number>|null} [value] IntsMsg value
         */
        /**
         * Constructs a new IntsMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - int list
         * @implements IIntsMsg
         * @constructor
         * @param {coreProto.IIntsMsg=} [properties] Properties to set
         */
        function IntsMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * IntsMsg value.
         * @member {Array.<number>} value
         * @memberof coreProto.IntsMsg
         * @instance
         */
        IntsMsg.prototype.value = $util.emptyArray;
        /**
         * Creates a new IntsMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.IntsMsg
         * @static
         * @param {coreProto.IIntsMsg=} [properties] Properties to set
         * @returns {coreProto.IntsMsg} IntsMsg instance
         */
        IntsMsg.create = function create(properties) {
            return new IntsMsg(properties);
        };
        /**
         * Encodes the specified IntsMsg message. Does not implicitly {@link coreProto.IntsMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.IntsMsg
         * @static
         * @param {coreProto.IIntsMsg} message IntsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
                for (var i = 0; i < message.value.length; ++i) {
                    writer.int32(message.value[i]);
                }
                writer.ldelim();
            }
            return writer;
        };
        /**
         * Encodes the specified IntsMsg message, length delimited. Does not implicitly {@link coreProto.IntsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.IntsMsg
         * @static
         * @param {coreProto.IIntsMsg} message IntsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes an IntsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.IntsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.IntsMsg} IntsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.IntsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.value.push(reader.int32());
                            }
                        }
                        else
                            message.value.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes an IntsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.IntsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.IntsMsg} IntsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies an IntsMsg message.
         * @function verify
         * @memberof coreProto.IntsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntsMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i) {
                    if (!$util.isInteger(message.value[i]))
                        return "value: integer[] expected";
                }
            }
            return null;
        };
        /**
         * Creates an IntsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.IntsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.IntsMsg} IntsMsg
         */
        IntsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.IntsMsg)
                return object;
            var message = new $root.coreProto.IntsMsg();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".coreProto.IntsMsg.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    message.value[i] = object.value[i] | 0;
                }
            }
            return message;
        };
        /**
         * Creates a plain object from an IntsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.IntsMsg
         * @static
         * @param {coreProto.IntsMsg} message IntsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j) {
                    object.value[j] = message.value[j];
                }
            }
            return object;
        };
        /**
         * Converts this IntsMsg to JSON.
         * @function toJSON
         * @memberof coreProto.IntsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntsMsg;
    }();
    coreProto.LongsMsg = function () {
        /**
         * Properties of a LongsMsg.
         * @memberof coreProto
         * @interface ILongsMsg
         * @property {Array.<number|Long>|null} [value] LongsMsg value
         */
        /**
         * Constructs a new LongsMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - long list
         * @implements ILongsMsg
         * @constructor
         * @param {coreProto.ILongsMsg=} [properties] Properties to set
         */
        function LongsMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * LongsMsg value.
         * @member {Array.<number|Long>} value
         * @memberof coreProto.LongsMsg
         * @instance
         */
        LongsMsg.prototype.value = $util.emptyArray;
        /**
         * Creates a new LongsMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.LongsMsg
         * @static
         * @param {coreProto.ILongsMsg=} [properties] Properties to set
         * @returns {coreProto.LongsMsg} LongsMsg instance
         */
        LongsMsg.create = function create(properties) {
            return new LongsMsg(properties);
        };
        /**
         * Encodes the specified LongsMsg message. Does not implicitly {@link coreProto.LongsMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.LongsMsg
         * @static
         * @param {coreProto.ILongsMsg} message LongsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
                for (var i = 0; i < message.value.length; ++i) {
                    writer.int64(message.value[i]);
                }
                writer.ldelim();
            }
            return writer;
        };
        /**
         * Encodes the specified LongsMsg message, length delimited. Does not implicitly {@link coreProto.LongsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.LongsMsg
         * @static
         * @param {coreProto.ILongsMsg} message LongsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a LongsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.LongsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.LongsMsg} LongsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.LongsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.value.push(reader.int64());
                            }
                        }
                        else
                            message.value.push(reader.int64());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a LongsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.LongsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.LongsMsg} LongsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a LongsMsg message.
         * @function verify
         * @memberof coreProto.LongsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongsMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i) {
                    if (!$util.isInteger(message.value[i]) && !(message.value[i] && $util.isInteger(message.value[i].low) && $util.isInteger(message.value[i].high)))
                        return "value: integer|Long[] expected";
                }
            }
            return null;
        };
        /**
         * Creates a LongsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.LongsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.LongsMsg} LongsMsg
         */
        LongsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.LongsMsg)
                return object;
            var message = new $root.coreProto.LongsMsg();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".coreProto.LongsMsg.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    if ($util.Long)
                        (message.value[i] = $util.Long.fromValue(object.value[i])).unsigned = false;
                    else if (typeof object.value[i] === "string")
                        message.value[i] = parseInt(object.value[i], 10);
                    else if (typeof object.value[i] === "number")
                        message.value[i] = object.value[i];
                    else if (_typeof(object.value[i]) === "object")
                        message.value[i] = new $util.LongBits(object.value[i].low >>> 0, object.value[i].high >>> 0).toNumber();
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a LongsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.LongsMsg
         * @static
         * @param {coreProto.LongsMsg} message LongsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j) {
                    if (typeof message.value[j] === "number")
                        object.value[j] = options.longs === String ? String(message.value[j]) : message.value[j];
                    else
                        object.value[j] = options.longs === String ? $util.Long.prototype.toString.call(message.value[j]) : options.longs === Number ? new $util.LongBits(message.value[j].low >>> 0, message.value[j].high >>> 0).toNumber() : message.value[j];
                }
            }
            return object;
        };
        /**
         * Converts this LongsMsg to JSON.
         * @function toJSON
         * @memberof coreProto.LongsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LongsMsg;
    }();
    coreProto.StringsMsg = function () {
        /**
         * Properties of a StringsMsg.
         * @memberof coreProto
         * @interface IStringsMsg
         * @property {Array.<string>|null} [value] StringsMsg value
         */
        /**
         * Constructs a new StringsMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - string list
         * @implements IStringsMsg
         * @constructor
         * @param {coreProto.IStringsMsg=} [properties] Properties to set
         */
        function StringsMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * StringsMsg value.
         * @member {Array.<string>} value
         * @memberof coreProto.StringsMsg
         * @instance
         */
        StringsMsg.prototype.value = $util.emptyArray;
        /**
         * Creates a new StringsMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.StringsMsg
         * @static
         * @param {coreProto.IStringsMsg=} [properties] Properties to set
         * @returns {coreProto.StringsMsg} StringsMsg instance
         */
        StringsMsg.create = function create(properties) {
            return new StringsMsg(properties);
        };
        /**
         * Encodes the specified StringsMsg message. Does not implicitly {@link coreProto.StringsMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.StringsMsg
         * @static
         * @param {coreProto.IStringsMsg} message StringsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.value[i]);
                }
            return writer;
        };
        /**
         * Encodes the specified StringsMsg message, length delimited. Does not implicitly {@link coreProto.StringsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.StringsMsg
         * @static
         * @param {coreProto.IStringsMsg} message StringsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a StringsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.StringsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.StringsMsg} StringsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.StringsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a StringsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.StringsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.StringsMsg} StringsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a StringsMsg message.
         * @function verify
         * @memberof coreProto.StringsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringsMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i) {
                    if (!$util.isString(message.value[i]))
                        return "value: string[] expected";
                }
            }
            return null;
        };
        /**
         * Creates a StringsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.StringsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.StringsMsg} StringsMsg
         */
        StringsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.StringsMsg)
                return object;
            var message = new $root.coreProto.StringsMsg();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".coreProto.StringsMsg.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    message.value[i] = String(object.value[i]);
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a StringsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.StringsMsg
         * @static
         * @param {coreProto.StringsMsg} message StringsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j) {
                    object.value[j] = message.value[j];
                }
            }
            return object;
        };
        /**
         * Converts this StringsMsg to JSON.
         * @function toJSON
         * @memberof coreProto.StringsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return StringsMsg;
    }();
    coreProto.DoublesMsg = function () {
        /**
         * Properties of a DoublesMsg.
         * @memberof coreProto
         * @interface IDoublesMsg
         * @property {Array.<number>|null} [value] DoublesMsg value
         */
        /**
         * Constructs a new DoublesMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - double list
         * @implements IDoublesMsg
         * @constructor
         * @param {coreProto.IDoublesMsg=} [properties] Properties to set
         */
        function DoublesMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * DoublesMsg value.
         * @member {Array.<number>} value
         * @memberof coreProto.DoublesMsg
         * @instance
         */
        DoublesMsg.prototype.value = $util.emptyArray;
        /**
         * Creates a new DoublesMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {coreProto.IDoublesMsg=} [properties] Properties to set
         * @returns {coreProto.DoublesMsg} DoublesMsg instance
         */
        DoublesMsg.create = function create(properties) {
            return new DoublesMsg(properties);
        };
        /**
         * Encodes the specified DoublesMsg message. Does not implicitly {@link coreProto.DoublesMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {coreProto.IDoublesMsg} message DoublesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoublesMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
                for (var i = 0; i < message.value.length; ++i) {
                    writer.double(message.value[i]);
                }
                writer.ldelim();
            }
            return writer;
        };
        /**
         * Encodes the specified DoublesMsg message, length delimited. Does not implicitly {@link coreProto.DoublesMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {coreProto.IDoublesMsg} message DoublesMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoublesMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a DoublesMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.DoublesMsg} DoublesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoublesMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.DoublesMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.value.push(reader.double());
                            }
                        }
                        else
                            message.value.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a DoublesMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.DoublesMsg} DoublesMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoublesMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a DoublesMsg message.
         * @function verify
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DoublesMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i) {
                    if (typeof message.value[i] !== "number")
                        return "value: number[] expected";
                }
            }
            return null;
        };
        /**
         * Creates a DoublesMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.DoublesMsg} DoublesMsg
         */
        DoublesMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.DoublesMsg)
                return object;
            var message = new $root.coreProto.DoublesMsg();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".coreProto.DoublesMsg.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    message.value[i] = Number(object.value[i]);
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a DoublesMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.DoublesMsg
         * @static
         * @param {coreProto.DoublesMsg} message DoublesMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DoublesMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j) {
                    object.value[j] = options.json && !isFinite(message.value[j]) ? String(message.value[j]) : message.value[j];
                }
            }
            return object;
        };
        /**
         * Converts this DoublesMsg to JSON.
         * @function toJSON
         * @memberof coreProto.DoublesMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DoublesMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DoublesMsg;
    }();
    coreProto.FloatsMsg = function () {
        /**
         * Properties of a FloatsMsg.
         * @memberof coreProto
         * @interface IFloatsMsg
         * @property {Array.<number>|null} [value] FloatsMsg value
         */
        /**
         * Constructs a new FloatsMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - float list
         * @implements IFloatsMsg
         * @constructor
         * @param {coreProto.IFloatsMsg=} [properties] Properties to set
         */
        function FloatsMsg(properties) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * FloatsMsg value.
         * @member {Array.<number>} value
         * @memberof coreProto.FloatsMsg
         * @instance
         */
        FloatsMsg.prototype.value = $util.emptyArray;
        /**
         * Creates a new FloatsMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {coreProto.IFloatsMsg=} [properties] Properties to set
         * @returns {coreProto.FloatsMsg} FloatsMsg instance
         */
        FloatsMsg.create = function create(properties) {
            return new FloatsMsg(properties);
        };
        /**
         * Encodes the specified FloatsMsg message. Does not implicitly {@link coreProto.FloatsMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {coreProto.IFloatsMsg} message FloatsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.value.length) {
                writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
                for (var i = 0; i < message.value.length; ++i) {
                    writer.float(message.value[i]);
                }
                writer.ldelim();
            }
            return writer;
        };
        /**
         * Encodes the specified FloatsMsg message, length delimited. Does not implicitly {@link coreProto.FloatsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {coreProto.IFloatsMsg} message FloatsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FloatsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a FloatsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.FloatsMsg} FloatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.FloatsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2) {
                                message.value.push(reader.float());
                            }
                        }
                        else
                            message.value.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a FloatsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.FloatsMsg} FloatsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a FloatsMsg message.
         * @function verify
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FloatsMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!Array.isArray(message.value))
                    return "value: array expected";
                for (var i = 0; i < message.value.length; ++i) {
                    if (typeof message.value[i] !== "number")
                        return "value: number[] expected";
                }
            }
            return null;
        };
        /**
         * Creates a FloatsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.FloatsMsg} FloatsMsg
         */
        FloatsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.FloatsMsg)
                return object;
            var message = new $root.coreProto.FloatsMsg();
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".coreProto.FloatsMsg.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    message.value[i] = Number(object.value[i]);
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a FloatsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.FloatsMsg
         * @static
         * @param {coreProto.FloatsMsg} message FloatsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloatsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.value = [];
            if (message.value && message.value.length) {
                object.value = [];
                for (var j = 0; j < message.value.length; ++j) {
                    object.value[j] = options.json && !isFinite(message.value[j]) ? String(message.value[j]) : message.value[j];
                }
            }
            return object;
        };
        /**
         * Converts this FloatsMsg to JSON.
         * @function toJSON
         * @memberof coreProto.FloatsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloatsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return FloatsMsg;
    }();
    coreProto.IntIntMapMsg = function () {
        /**
         * Properties of an IntIntMapMsg.
         * @memberof coreProto
         * @interface IIntIntMapMsg
         * @property {Object.<string,number>|null} [value] IntIntMapMsg value
         */
        /**
         * Constructs a new IntIntMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - int int map
         * @implements IIntIntMapMsg
         * @constructor
         * @param {coreProto.IIntIntMapMsg=} [properties] Properties to set
         */
        function IntIntMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * IntIntMapMsg value.
         * @member {Object.<string,number>} value
         * @memberof coreProto.IntIntMapMsg
         * @instance
         */
        IntIntMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new IntIntMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {coreProto.IIntIntMapMsg=} [properties] Properties to set
         * @returns {coreProto.IntIntMapMsg} IntIntMapMsg instance
         */
        IntIntMapMsg.create = function create(properties) {
            return new IntIntMapMsg(properties);
        };
        /**
         * Encodes the specified IntIntMapMsg message. Does not implicitly {@link coreProto.IntIntMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {coreProto.IIntIntMapMsg} message IntIntMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntIntMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/ 16).int32(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified IntIntMapMsg message, length delimited. Does not implicitly {@link coreProto.IntIntMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {coreProto.IIntIntMapMsg} message IntIntMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntIntMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes an IntIntMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.IntIntMapMsg} IntIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntIntMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.IntIntMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int32();
                        reader.pos++;
                        message.value[key] = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes an IntIntMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.IntIntMapMsg} IntIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntIntMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies an IntIntMapMsg message.
         * @function verify
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntIntMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "value: integer key{k:int32} expected";
                    if (!$util.isInteger(message.value[key[i]]))
                        return "value: integer{k:int32} expected";
                }
            }
            return null;
        };
        /**
         * Creates an IntIntMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.IntIntMapMsg} IntIntMapMsg
         */
        IntIntMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.IntIntMapMsg)
                return object;
            var message = new $root.coreProto.IntIntMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.IntIntMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    message.value[keys[i]] = object.value[keys[i]] | 0;
                }
            }
            return message;
        };
        /**
         * Creates a plain object from an IntIntMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.IntIntMapMsg
         * @static
         * @param {coreProto.IntIntMapMsg} message IntIntMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntIntMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    object.value[keys2[j]] = message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this IntIntMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.IntIntMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntIntMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntIntMapMsg;
    }();
    coreProto.IntLongMapMsg = function () {
        /**
         * Properties of an IntLongMapMsg.
         * @memberof coreProto
         * @interface IIntLongMapMsg
         * @property {Object.<string,number|Long>|null} [value] IntLongMapMsg value
         */
        /**
         * Constructs a new IntLongMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - int long map
         * @implements IIntLongMapMsg
         * @constructor
         * @param {coreProto.IIntLongMapMsg=} [properties] Properties to set
         */
        function IntLongMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * IntLongMapMsg value.
         * @member {Object.<string,number|Long>} value
         * @memberof coreProto.IntLongMapMsg
         * @instance
         */
        IntLongMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new IntLongMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {coreProto.IIntLongMapMsg=} [properties] Properties to set
         * @returns {coreProto.IntLongMapMsg} IntLongMapMsg instance
         */
        IntLongMapMsg.create = function create(properties) {
            return new IntLongMapMsg(properties);
        };
        /**
         * Encodes the specified IntLongMapMsg message. Does not implicitly {@link coreProto.IntLongMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {coreProto.IIntLongMapMsg} message IntLongMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntLongMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/ 16).int64(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified IntLongMapMsg message, length delimited. Does not implicitly {@link coreProto.IntLongMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {coreProto.IIntLongMapMsg} message IntLongMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntLongMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes an IntLongMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.IntLongMapMsg} IntLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntLongMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.IntLongMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int32();
                        reader.pos++;
                        message.value[key] = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes an IntLongMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.IntLongMapMsg} IntLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntLongMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies an IntLongMapMsg message.
         * @function verify
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntLongMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "value: integer key{k:int32} expected";
                    if (!$util.isInteger(message.value[key[i]]) && !(message.value[key[i]] && $util.isInteger(message.value[key[i]].low) && $util.isInteger(message.value[key[i]].high)))
                        return "value: integer|Long{k:int32} expected";
                }
            }
            return null;
        };
        /**
         * Creates an IntLongMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.IntLongMapMsg} IntLongMapMsg
         */
        IntLongMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.IntLongMapMsg)
                return object;
            var message = new $root.coreProto.IntLongMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.IntLongMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    if ($util.Long)
                        (message.value[keys[i]] = $util.Long.fromValue(object.value[keys[i]])).unsigned = false;
                    else if (typeof object.value[keys[i]] === "string")
                        message.value[keys[i]] = parseInt(object.value[keys[i]], 10);
                    else if (typeof object.value[keys[i]] === "number")
                        message.value[keys[i]] = object.value[keys[i]];
                    else if (_typeof(object.value[keys[i]]) === "object")
                        message.value[keys[i]] = new $util.LongBits(object.value[keys[i]].low >>> 0, object.value[keys[i]].high >>> 0).toNumber();
                }
            }
            return message;
        };
        /**
         * Creates a plain object from an IntLongMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.IntLongMapMsg
         * @static
         * @param {coreProto.IntLongMapMsg} message IntLongMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntLongMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    if (typeof message.value[keys2[j]] === "number")
                        object.value[keys2[j]] = options.longs === String ? String(message.value[keys2[j]]) : message.value[keys2[j]];
                    else
                        object.value[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.value[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.value[keys2[j]].low >>> 0, message.value[keys2[j]].high >>> 0).toNumber() : message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this IntLongMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.IntLongMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntLongMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntLongMapMsg;
    }();
    coreProto.IntStringMapMsg = function () {
        /**
         * Properties of an IntStringMapMsg.
         * @memberof coreProto
         * @interface IIntStringMapMsg
         * @property {Object.<string,string>|null} [value] IntStringMapMsg value
         */
        /**
         * Constructs a new IntStringMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - int string map
         * @implements IIntStringMapMsg
         * @constructor
         * @param {coreProto.IIntStringMapMsg=} [properties] Properties to set
         */
        function IntStringMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * IntStringMapMsg value.
         * @member {Object.<string,string>} value
         * @memberof coreProto.IntStringMapMsg
         * @instance
         */
        IntStringMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new IntStringMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {coreProto.IIntStringMapMsg=} [properties] Properties to set
         * @returns {coreProto.IntStringMapMsg} IntStringMapMsg instance
         */
        IntStringMapMsg.create = function create(properties) {
            return new IntStringMapMsg(properties);
        };
        /**
         * Encodes the specified IntStringMapMsg message. Does not implicitly {@link coreProto.IntStringMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {coreProto.IIntStringMapMsg} message IntStringMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntStringMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/ 18).string(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified IntStringMapMsg message, length delimited. Does not implicitly {@link coreProto.IntStringMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {coreProto.IIntStringMapMsg} message IntStringMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntStringMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes an IntStringMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.IntStringMapMsg} IntStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntStringMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.IntStringMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int32();
                        reader.pos++;
                        message.value[key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes an IntStringMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.IntStringMapMsg} IntStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntStringMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies an IntStringMapMsg message.
         * @function verify
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntStringMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "value: integer key{k:int32} expected";
                    if (!$util.isString(message.value[key[i]]))
                        return "value: string{k:int32} expected";
                }
            }
            return null;
        };
        /**
         * Creates an IntStringMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.IntStringMapMsg} IntStringMapMsg
         */
        IntStringMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.IntStringMapMsg)
                return object;
            var message = new $root.coreProto.IntStringMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.IntStringMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    message.value[keys[i]] = String(object.value[keys[i]]);
                }
            }
            return message;
        };
        /**
         * Creates a plain object from an IntStringMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.IntStringMapMsg
         * @static
         * @param {coreProto.IntStringMapMsg} message IntStringMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntStringMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    object.value[keys2[j]] = message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this IntStringMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.IntStringMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntStringMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return IntStringMapMsg;
    }();
    coreProto.LongLongMapMsg = function () {
        /**
         * Properties of a LongLongMapMsg.
         * @memberof coreProto
         * @interface ILongLongMapMsg
         * @property {Object.<string,number|Long>|null} [value] LongLongMapMsg value
         */
        /**
         * Constructs a new LongLongMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - long long map
         * @implements ILongLongMapMsg
         * @constructor
         * @param {coreProto.ILongLongMapMsg=} [properties] Properties to set
         */
        function LongLongMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * LongLongMapMsg value.
         * @member {Object.<string,number|Long>} value
         * @memberof coreProto.LongLongMapMsg
         * @instance
         */
        LongLongMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new LongLongMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {coreProto.ILongLongMapMsg=} [properties] Properties to set
         * @returns {coreProto.LongLongMapMsg} LongLongMapMsg instance
         */
        LongLongMapMsg.create = function create(properties) {
            return new LongLongMapMsg(properties);
        };
        /**
         * Encodes the specified LongLongMapMsg message. Does not implicitly {@link coreProto.LongLongMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {coreProto.ILongLongMapMsg} message LongLongMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongLongMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/ 16).int64(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified LongLongMapMsg message, length delimited. Does not implicitly {@link coreProto.LongLongMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {coreProto.ILongLongMapMsg} message LongLongMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongLongMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a LongLongMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.LongLongMapMsg} LongLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongLongMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.LongLongMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int64();
                        reader.pos++;
                        message.value[(typeof key === "undefined" ? "undefined" : _typeof(key)) === "object" ? $util.longToHash(key) : key] = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a LongLongMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.LongLongMapMsg} LongLongMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongLongMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a LongLongMapMsg message.
         * @function verify
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongLongMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "value: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.value[key[i]]) && !(message.value[key[i]] && $util.isInteger(message.value[key[i]].low) && $util.isInteger(message.value[key[i]].high)))
                        return "value: integer|Long{k:int64} expected";
                }
            }
            return null;
        };
        /**
         * Creates a LongLongMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.LongLongMapMsg} LongLongMapMsg
         */
        LongLongMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.LongLongMapMsg)
                return object;
            var message = new $root.coreProto.LongLongMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.LongLongMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    if ($util.Long)
                        (message.value[keys[i]] = $util.Long.fromValue(object.value[keys[i]])).unsigned = false;
                    else if (typeof object.value[keys[i]] === "string")
                        message.value[keys[i]] = parseInt(object.value[keys[i]], 10);
                    else if (typeof object.value[keys[i]] === "number")
                        message.value[keys[i]] = object.value[keys[i]];
                    else if (_typeof(object.value[keys[i]]) === "object")
                        message.value[keys[i]] = new $util.LongBits(object.value[keys[i]].low >>> 0, object.value[keys[i]].high >>> 0).toNumber();
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a LongLongMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.LongLongMapMsg
         * @static
         * @param {coreProto.LongLongMapMsg} message LongLongMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongLongMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    if (typeof message.value[keys2[j]] === "number")
                        object.value[keys2[j]] = options.longs === String ? String(message.value[keys2[j]]) : message.value[keys2[j]];
                    else
                        object.value[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.value[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.value[keys2[j]].low >>> 0, message.value[keys2[j]].high >>> 0).toNumber() : message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this LongLongMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.LongLongMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongLongMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LongLongMapMsg;
    }();
    coreProto.LongIntMapMsg = function () {
        /**
         * Properties of a LongIntMapMsg.
         * @memberof coreProto
         * @interface ILongIntMapMsg
         * @property {Object.<string,number>|null} [value] LongIntMapMsg value
         */
        /**
         * Constructs a new LongIntMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - long int map
         * @implements ILongIntMapMsg
         * @constructor
         * @param {coreProto.ILongIntMapMsg=} [properties] Properties to set
         */
        function LongIntMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * LongIntMapMsg value.
         * @member {Object.<string,number>} value
         * @memberof coreProto.LongIntMapMsg
         * @instance
         */
        LongIntMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new LongIntMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {coreProto.ILongIntMapMsg=} [properties] Properties to set
         * @returns {coreProto.LongIntMapMsg} LongIntMapMsg instance
         */
        LongIntMapMsg.create = function create(properties) {
            return new LongIntMapMsg(properties);
        };
        /**
         * Encodes the specified LongIntMapMsg message. Does not implicitly {@link coreProto.LongIntMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {coreProto.ILongIntMapMsg} message LongIntMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongIntMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int64(keys[i]).uint32(/* id 2, wireType 0 =*/ 16).int32(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified LongIntMapMsg message, length delimited. Does not implicitly {@link coreProto.LongIntMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {coreProto.ILongIntMapMsg} message LongIntMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongIntMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a LongIntMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.LongIntMapMsg} LongIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongIntMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.LongIntMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int64();
                        reader.pos++;
                        message.value[(typeof key === "undefined" ? "undefined" : _typeof(key)) === "object" ? $util.longToHash(key) : key] = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a LongIntMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.LongIntMapMsg} LongIntMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongIntMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a LongIntMapMsg message.
         * @function verify
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongIntMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "value: integer|Long key{k:int64} expected";
                    if (!$util.isInteger(message.value[key[i]]))
                        return "value: integer{k:int64} expected";
                }
            }
            return null;
        };
        /**
         * Creates a LongIntMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.LongIntMapMsg} LongIntMapMsg
         */
        LongIntMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.LongIntMapMsg)
                return object;
            var message = new $root.coreProto.LongIntMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.LongIntMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    message.value[keys[i]] = object.value[keys[i]] | 0;
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a LongIntMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.LongIntMapMsg
         * @static
         * @param {coreProto.LongIntMapMsg} message LongIntMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongIntMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    object.value[keys2[j]] = message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this LongIntMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.LongIntMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongIntMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LongIntMapMsg;
    }();
    coreProto.LongStringMapMsg = function () {
        /**
         * Properties of a LongStringMapMsg.
         * @memberof coreProto
         * @interface ILongStringMapMsg
         * @property {Object.<string,string>|null} [value] LongStringMapMsg value
         */
        /**
         * Constructs a new LongStringMapMsg.
         * @memberof coreProto
         * @classdesc 基础数据类型 - long string map
         * @implements ILongStringMapMsg
         * @constructor
         * @param {coreProto.ILongStringMapMsg=} [properties] Properties to set
         */
        function LongStringMapMsg(properties) {
            this.value = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * LongStringMapMsg value.
         * @member {Object.<string,string>} value
         * @memberof coreProto.LongStringMapMsg
         * @instance
         */
        LongStringMapMsg.prototype.value = $util.emptyObject;
        /**
         * Creates a new LongStringMapMsg instance using the specified properties.
         * @function create
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {coreProto.ILongStringMapMsg=} [properties] Properties to set
         * @returns {coreProto.LongStringMapMsg} LongStringMapMsg instance
         */
        LongStringMapMsg.create = function create(properties) {
            return new LongStringMapMsg(properties);
        };
        /**
         * Encodes the specified LongStringMapMsg message. Does not implicitly {@link coreProto.LongStringMapMsg.verify|verify} messages.
         * @function encode
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {coreProto.ILongStringMapMsg} message LongStringMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongStringMapMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                for (var keys = Object.keys(message.value), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork().uint32(/* id 1, wireType 0 =*/ 8).int64(keys[i]).uint32(/* id 2, wireType 2 =*/ 18).string(message.value[keys[i]]).ldelim();
                }
            return writer;
        };
        /**
         * Encodes the specified LongStringMapMsg message, length delimited. Does not implicitly {@link coreProto.LongStringMapMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {coreProto.ILongStringMapMsg} message LongStringMapMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LongStringMapMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a LongStringMapMsg message from the specified reader or buffer.
         * @function decode
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {coreProto.LongStringMapMsg} LongStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongStringMapMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.coreProto.LongStringMapMsg(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.value === $util.emptyObject)
                            message.value = {};
                        key = reader.int64();
                        reader.pos++;
                        message.value[(typeof key === "undefined" ? "undefined" : _typeof(key)) === "object" ? $util.longToHash(key) : key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a LongStringMapMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {coreProto.LongStringMapMsg} LongStringMapMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LongStringMapMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a LongStringMapMsg message.
         * @function verify
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LongStringMapMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                if (!$util.isObject(message.value))
                    return "value: object expected";
                var key = Object.keys(message.value);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "value: integer|Long key{k:int64} expected";
                    if (!$util.isString(message.value[key[i]]))
                        return "value: string{k:int64} expected";
                }
            }
            return null;
        };
        /**
         * Creates a LongStringMapMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coreProto.LongStringMapMsg} LongStringMapMsg
         */
        LongStringMapMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.coreProto.LongStringMapMsg)
                return object;
            var message = new $root.coreProto.LongStringMapMsg();
            if (object.value) {
                if (_typeof(object.value) !== "object")
                    throw TypeError(".coreProto.LongStringMapMsg.value: object expected");
                message.value = {};
                for (var keys = Object.keys(object.value), i = 0; i < keys.length; ++i) {
                    message.value[keys[i]] = String(object.value[keys[i]]);
                }
            }
            return message;
        };
        /**
         * Creates a plain object from a LongStringMapMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coreProto.LongStringMapMsg
         * @static
         * @param {coreProto.LongStringMapMsg} message LongStringMapMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LongStringMapMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.value = {};
            var keys2;
            if (message.value && (keys2 = Object.keys(message.value)).length) {
                object.value = {};
                for (var j = 0; j < keys2.length; ++j) {
                    object.value[keys2[j]] = message.value[keys2[j]];
                }
            }
            return object;
        };
        /**
         * Converts this LongStringMapMsg to JSON.
         * @function toJSON
         * @memberof coreProto.LongStringMapMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LongStringMapMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LongStringMapMsg;
    }();
    return coreProto;
}();
$root.gameProto = function () {
    /**
     * Namespace gameProto.
     * @exports gameProto
     * @namespace
     */
    var gameProto = {};
    /**
     * 游戏类型
     * @name gameProto.GameType
     * @enum {string}
     * @property {number} TUI_TONG_ZI=0 TUI_TONG_ZI value
     * @property {number} KA_WU_XING=1 KA_WU_XING value
     * @property {number} XUE_LIU_CHENG_HE=2 XUE_LIU_CHENG_HE value
     * @property {number} XUE_ZHAN_DAO_DI=3 XUE_ZHAN_DAO_DI value
     */
    gameProto.GameType = function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TUI_TONG_ZI"] = 0;
        values[valuesById[1] = "KA_WU_XING"] = 1;
        values[valuesById[2] = "XUE_LIU_CHENG_HE"] = 2;
        values[valuesById[3] = "XUE_ZHAN_DAO_DI"] = 3;
        return values;
    }();
    return gameProto;
}();
$root.hallProto = function () {
    /**
     * Namespace hallProto.
     * @exports hallProto
     * @namespace
     */
    var hallProto = {};
    return hallProto;
}();
$root.playerProto = function () {
    /**
     * Namespace playerProto.
     * @exports playerProto
     * @namespace
     */
    var playerProto = {};
    /**
     * 玩家状态信息
     * @name playerProto.PlayerState
     * @enum {string}
     * @property {number} ONLINE=0 ONLINE value
     * @property {number} OFFLINE=1 OFFLINE value
     * @property {number} IN_GAME=2 IN_GAME value
     */
    playerProto.PlayerState = function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONLINE"] = 0;
        values[valuesById[1] = "OFFLINE"] = 1;
        values[valuesById[2] = "IN_GAME"] = 2;
        return values;
    }();
    playerProto.SimplePlayerMsg = function () {
        /**
         * Properties of a SimplePlayerMsg.
         * @memberof playerProto
         * @interface ISimplePlayerMsg
         * @property {number|Long|null} [playerId] SimplePlayerMsg playerId
         * @property {string|null} [nickname] SimplePlayerMsg nickname
         * @property {string|null} [headImage] SimplePlayerMsg headImage
         * @property {playerProto.PlayerState|null} [state] SimplePlayerMsg state
         */
        /**
         * Constructs a new SimplePlayerMsg.
         * @memberof playerProto
         * @classdesc 基础玩家信息
         * @implements ISimplePlayerMsg
         * @constructor
         * @param {playerProto.ISimplePlayerMsg=} [properties] Properties to set
         */
        function SimplePlayerMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * SimplePlayerMsg playerId.
         * @member {number|Long} playerId
         * @memberof playerProto.SimplePlayerMsg
         * @instance
         */
        SimplePlayerMsg.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        /**
         * SimplePlayerMsg nickname.
         * @member {string} nickname
         * @memberof playerProto.SimplePlayerMsg
         * @instance
         */
        SimplePlayerMsg.prototype.nickname = "";
        /**
         * SimplePlayerMsg headImage.
         * @member {string} headImage
         * @memberof playerProto.SimplePlayerMsg
         * @instance
         */
        SimplePlayerMsg.prototype.headImage = "";
        /**
         * SimplePlayerMsg state.
         * @member {playerProto.PlayerState} state
         * @memberof playerProto.SimplePlayerMsg
         * @instance
         */
        SimplePlayerMsg.prototype.state = 0;
        /**
         * Creates a new SimplePlayerMsg instance using the specified properties.
         * @function create
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {playerProto.ISimplePlayerMsg=} [properties] Properties to set
         * @returns {playerProto.SimplePlayerMsg} SimplePlayerMsg instance
         */
        SimplePlayerMsg.create = function create(properties) {
            return new SimplePlayerMsg(properties);
        };
        /**
         * Encodes the specified SimplePlayerMsg message. Does not implicitly {@link playerProto.SimplePlayerMsg.verify|verify} messages.
         * @function encode
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {playerProto.ISimplePlayerMsg} message SimplePlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimplePlayerMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.playerId);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.nickname);
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.headImage);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.state);
            return writer;
        };
        /**
         * Encodes the specified SimplePlayerMsg message, length delimited. Does not implicitly {@link playerProto.SimplePlayerMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {playerProto.ISimplePlayerMsg} message SimplePlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimplePlayerMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a SimplePlayerMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerProto.SimplePlayerMsg} SimplePlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimplePlayerMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerProto.SimplePlayerMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.playerId = reader.int64();
                        break;
                    case 2:
                        message.nickname = reader.string();
                        break;
                    case 3:
                        message.headImage = reader.string();
                        break;
                    case 4:
                        message.state = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a SimplePlayerMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerProto.SimplePlayerMsg} SimplePlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimplePlayerMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a SimplePlayerMsg message.
         * @function verify
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SimplePlayerMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                if (!$util.isString(message.headImage))
                    return "headImage: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                    default:
                        return "state: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                }
            return null;
        };
        /**
         * Creates a SimplePlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerProto.SimplePlayerMsg} SimplePlayerMsg
         */
        SimplePlayerMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerProto.SimplePlayerMsg)
                return object;
            var message = new $root.playerProto.SimplePlayerMsg();
            if (object.playerId != null)
                if ($util.Long)
                    (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
                else if (typeof object.playerId === "string")
                    message.playerId = parseInt(object.playerId, 10);
                else if (typeof object.playerId === "number")
                    message.playerId = object.playerId;
                else if (_typeof(object.playerId) === "object")
                    message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headImage != null)
                message.headImage = String(object.headImage);
            switch (object.state) {
                case "ONLINE":
                case 0:
                    message.state = 0;
                    break;
                case "OFFLINE":
                case 1:
                    message.state = 1;
                    break;
                case "IN_GAME":
                case 2:
                    message.state = 2;
                    break;
            }
            return message;
        };
        /**
         * Creates a plain object from a SimplePlayerMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerProto.SimplePlayerMsg
         * @static
         * @param {playerProto.SimplePlayerMsg} message SimplePlayerMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SimplePlayerMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                }
                else
                    object.playerId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.headImage = "";
                object.state = options.enums === String ? "ONLINE" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (typeof message.playerId === "number")
                    object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
                else
                    object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                object.headImage = message.headImage;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.playerProto.PlayerState[message.state] : message.state;
            return object;
        };
        /**
         * Converts this SimplePlayerMsg to JSON.
         * @function toJSON
         * @memberof playerProto.SimplePlayerMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SimplePlayerMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SimplePlayerMsg;
    }();
    playerProto.PlayerMsg = function () {
        /**
         * Properties of a PlayerMsg.
         * @memberof playerProto
         * @interface IPlayerMsg
         * @property {playerProto.ISimplePlayerMsg|null} [simplePlayer] PlayerMsg simplePlayer
         * @property {number|null} [roomCardNum] PlayerMsg roomCardNum
         */
        /**
         * Constructs a new PlayerMsg.
         * @memberof playerProto
         * @classdesc 玩家信息
         * @implements IPlayerMsg
         * @constructor
         * @param {playerProto.IPlayerMsg=} [properties] Properties to set
         */
        function PlayerMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * PlayerMsg simplePlayer.
         * @member {playerProto.ISimplePlayerMsg|null|undefined} simplePlayer
         * @memberof playerProto.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.simplePlayer = null;
        /**
         * PlayerMsg roomCardNum.
         * @member {number} roomCardNum
         * @memberof playerProto.PlayerMsg
         * @instance
         */
        PlayerMsg.prototype.roomCardNum = 0;
        /**
         * Creates a new PlayerMsg instance using the specified properties.
         * @function create
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {playerProto.IPlayerMsg=} [properties] Properties to set
         * @returns {playerProto.PlayerMsg} PlayerMsg instance
         */
        PlayerMsg.create = function create(properties) {
            return new PlayerMsg(properties);
        };
        /**
         * Encodes the specified PlayerMsg message. Does not implicitly {@link playerProto.PlayerMsg.verify|verify} messages.
         * @function encode
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {playerProto.IPlayerMsg} message PlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer"))
                $root.playerProto.SimplePlayerMsg.encode(message.simplePlayer, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
            if (message.roomCardNum != null && message.hasOwnProperty("roomCardNum"))
                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.roomCardNum);
            return writer;
        };
        /**
         * Encodes the specified PlayerMsg message, length delimited. Does not implicitly {@link playerProto.PlayerMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {playerProto.IPlayerMsg} message PlayerMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a PlayerMsg message from the specified reader or buffer.
         * @function decode
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {playerProto.PlayerMsg} PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.playerProto.PlayerMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.simplePlayer = $root.playerProto.SimplePlayerMsg.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.roomCardNum = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a PlayerMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {playerProto.PlayerMsg} PlayerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a PlayerMsg message.
         * @function verify
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer")) {
                var error = $root.playerProto.SimplePlayerMsg.verify(message.simplePlayer);
                if (error)
                    return "simplePlayer." + error;
            }
            if (message.roomCardNum != null && message.hasOwnProperty("roomCardNum"))
                if (!$util.isInteger(message.roomCardNum))
                    return "roomCardNum: integer expected";
            return null;
        };
        /**
         * Creates a PlayerMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {playerProto.PlayerMsg} PlayerMsg
         */
        PlayerMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.playerProto.PlayerMsg)
                return object;
            var message = new $root.playerProto.PlayerMsg();
            if (object.simplePlayer != null) {
                if (_typeof(object.simplePlayer) !== "object")
                    throw TypeError(".playerProto.PlayerMsg.simplePlayer: object expected");
                message.simplePlayer = $root.playerProto.SimplePlayerMsg.fromObject(object.simplePlayer);
            }
            if (object.roomCardNum != null)
                message.roomCardNum = object.roomCardNum | 0;
            return message;
        };
        /**
         * Creates a plain object from a PlayerMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof playerProto.PlayerMsg
         * @static
         * @param {playerProto.PlayerMsg} message PlayerMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.simplePlayer = null;
                object.roomCardNum = 0;
            }
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer"))
                object.simplePlayer = $root.playerProto.SimplePlayerMsg.toObject(message.simplePlayer, options);
            if (message.roomCardNum != null && message.hasOwnProperty("roomCardNum"))
                object.roomCardNum = message.roomCardNum;
            return object;
        };
        /**
         * Converts this PlayerMsg to JSON.
         * @function toJSON
         * @memberof playerProto.PlayerMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return PlayerMsg;
    }();
    return playerProto;
}();
$root.roomProto = function () {
    /**
     * Namespace roomProto.
     * @exports roomProto
     * @namespace
     */
    var roomProto = {};
    roomProto.RoomMsg = function () {
        /**
         * Properties of a RoomMsg.
         * @memberof roomProto
         * @interface IRoomMsg
         * @property {number|null} [roomId] RoomMsg roomId
         * @property {Array.<roomProto.IRoomPlayer>|null} [players] RoomMsg players
         * @property {gameProto.GameType|null} [gameType] RoomMsg gameType
         */
        /**
         * Constructs a new RoomMsg.
         * @memberof roomProto
         * @classdesc 房间消息
         * @implements IRoomMsg
         * @constructor
         * @param {roomProto.IRoomMsg=} [properties] Properties to set
         */
        function RoomMsg(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * RoomMsg roomId.
         * @member {number} roomId
         * @memberof roomProto.RoomMsg
         * @instance
         */
        RoomMsg.prototype.roomId = 0;
        /**
         * RoomMsg players.
         * @member {Array.<roomProto.IRoomPlayer>} players
         * @memberof roomProto.RoomMsg
         * @instance
         */
        RoomMsg.prototype.players = $util.emptyArray;
        /**
         * RoomMsg gameType.
         * @member {gameProto.GameType} gameType
         * @memberof roomProto.RoomMsg
         * @instance
         */
        RoomMsg.prototype.gameType = 0;
        /**
         * Creates a new RoomMsg instance using the specified properties.
         * @function create
         * @memberof roomProto.RoomMsg
         * @static
         * @param {roomProto.IRoomMsg=} [properties] Properties to set
         * @returns {roomProto.RoomMsg} RoomMsg instance
         */
        RoomMsg.create = function create(properties) {
            return new RoomMsg(properties);
        };
        /**
         * Encodes the specified RoomMsg message. Does not implicitly {@link roomProto.RoomMsg.verify|verify} messages.
         * @function encode
         * @memberof roomProto.RoomMsg
         * @static
         * @param {roomProto.IRoomMsg} message RoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.roomId);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i) {
                    $root.roomProto.RoomPlayer.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                }
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.gameType);
            return writer;
        };
        /**
         * Encodes the specified RoomMsg message, length delimited. Does not implicitly {@link roomProto.RoomMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomProto.RoomMsg
         * @static
         * @param {roomProto.IRoomMsg} message RoomMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a RoomMsg message from the specified reader or buffer.
         * @function decode
         * @memberof roomProto.RoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomProto.RoomMsg} RoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomProto.RoomMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.roomId = reader.int32();
                        break;
                    case 2:
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.roomProto.RoomPlayer.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.gameType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a RoomMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomProto.RoomMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomProto.RoomMsg} RoomMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a RoomMsg message.
         * @function verify
         * @memberof roomProto.RoomMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.roomProto.RoomPlayer.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                switch (message.gameType) {
                    default:
                        return "gameType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                }
            return null;
        };
        /**
         * Creates a RoomMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomProto.RoomMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomProto.RoomMsg} RoomMsg
         */
        RoomMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.roomProto.RoomMsg)
                return object;
            var message = new $root.roomProto.RoomMsg();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".roomProto.RoomMsg.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (_typeof(object.players[i]) !== "object")
                        throw TypeError(".roomProto.RoomMsg.players: object expected");
                    message.players[i] = $root.roomProto.RoomPlayer.fromObject(object.players[i]);
                }
            }
            switch (object.gameType) {
                case "TUI_TONG_ZI":
                case 0:
                    message.gameType = 0;
                    break;
                case "KA_WU_XING":
                case 1:
                    message.gameType = 1;
                    break;
                case "XUE_LIU_CHENG_HE":
                case 2:
                    message.gameType = 2;
                    break;
                case "XUE_ZHAN_DAO_DI":
                case 3:
                    message.gameType = 3;
                    break;
            }
            return message;
        };
        /**
         * Creates a plain object from a RoomMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomProto.RoomMsg
         * @static
         * @param {roomProto.RoomMsg} message RoomMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.roomId = 0;
                object.gameType = options.enums === String ? "TUI_TONG_ZI" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j) {
                    object.players[j] = $root.roomProto.RoomPlayer.toObject(message.players[j], options);
                }
            }
            if (message.gameType != null && message.hasOwnProperty("gameType"))
                object.gameType = options.enums === String ? $root.gameProto.GameType[message.gameType] : message.gameType;
            return object;
        };
        /**
         * Converts this RoomMsg to JSON.
         * @function toJSON
         * @memberof roomProto.RoomMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return RoomMsg;
    }();
    roomProto.RoomPlayer = function () {
        /**
         * Properties of a RoomPlayer.
         * @memberof roomProto
         * @interface IRoomPlayer
         * @property {playerProto.ISimplePlayerMsg|null} [simplePlayer] RoomPlayer simplePlayer
         */
        /**
         * Constructs a new RoomPlayer.
         * @memberof roomProto
         * @classdesc 房间中玩家信息
         * @implements IRoomPlayer
         * @constructor
         * @param {roomProto.IRoomPlayer=} [properties] Properties to set
         */
        function RoomPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * RoomPlayer simplePlayer.
         * @member {playerProto.ISimplePlayerMsg|null|undefined} simplePlayer
         * @memberof roomProto.RoomPlayer
         * @instance
         */
        RoomPlayer.prototype.simplePlayer = null;
        /**
         * Creates a new RoomPlayer instance using the specified properties.
         * @function create
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {roomProto.IRoomPlayer=} [properties] Properties to set
         * @returns {roomProto.RoomPlayer} RoomPlayer instance
         */
        RoomPlayer.create = function create(properties) {
            return new RoomPlayer(properties);
        };
        /**
         * Encodes the specified RoomPlayer message. Does not implicitly {@link roomProto.RoomPlayer.verify|verify} messages.
         * @function encode
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {roomProto.IRoomPlayer} message RoomPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer"))
                $root.playerProto.SimplePlayerMsg.encode(message.simplePlayer, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
            return writer;
        };
        /**
         * Encodes the specified RoomPlayer message, length delimited. Does not implicitly {@link roomProto.RoomPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {roomProto.IRoomPlayer} message RoomPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a RoomPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roomProto.RoomPlayer} RoomPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roomProto.RoomPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.simplePlayer = $root.playerProto.SimplePlayerMsg.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a RoomPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roomProto.RoomPlayer} RoomPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a RoomPlayer message.
         * @function verify
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomPlayer.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer")) {
                var error = $root.playerProto.SimplePlayerMsg.verify(message.simplePlayer);
                if (error)
                    return "simplePlayer." + error;
            }
            return null;
        };
        /**
         * Creates a RoomPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roomProto.RoomPlayer} RoomPlayer
         */
        RoomPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.roomProto.RoomPlayer)
                return object;
            var message = new $root.roomProto.RoomPlayer();
            if (object.simplePlayer != null) {
                if (_typeof(object.simplePlayer) !== "object")
                    throw TypeError(".roomProto.RoomPlayer.simplePlayer: object expected");
                message.simplePlayer = $root.playerProto.SimplePlayerMsg.fromObject(object.simplePlayer);
            }
            return message;
        };
        /**
         * Creates a plain object from a RoomPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roomProto.RoomPlayer
         * @static
         * @param {roomProto.RoomPlayer} message RoomPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.simplePlayer = null;
            if (message.simplePlayer != null && message.hasOwnProperty("simplePlayer"))
                object.simplePlayer = $root.playerProto.SimplePlayerMsg.toObject(message.simplePlayer, options);
            return object;
        };
        /**
         * Converts this RoomPlayer to JSON.
         * @function toJSON
         * @memberof roomProto.RoomPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return RoomPlayer;
    }();
    return roomProto;
}();
$root.settingsProto = function () {
    /**
     * Namespace settingsProto.
     * @exports settingsProto
     * @namespace
     */
    var settingsProto = {};
    settingsProto.SettingsMsg = function () {
        /**
         * Properties of a SettingsMsg.
         * @memberof settingsProto
         * @interface ISettingsMsg
         * @property {number|null} [backgroundMusic] SettingsMsg backgroundMusic
         * @property {number|null} [soundEffect] SettingsMsg soundEffect
         */
        /**
         * Constructs a new SettingsMsg.
         * @memberof settingsProto
         * @classdesc 用户设置信息
         * @implements ISettingsMsg
         * @constructor
         * @param {settingsProto.ISettingsMsg=} [properties] Properties to set
         */
        function SettingsMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * SettingsMsg backgroundMusic.
         * @member {number} backgroundMusic
         * @memberof settingsProto.SettingsMsg
         * @instance
         */
        SettingsMsg.prototype.backgroundMusic = 0;
        /**
         * SettingsMsg soundEffect.
         * @member {number} soundEffect
         * @memberof settingsProto.SettingsMsg
         * @instance
         */
        SettingsMsg.prototype.soundEffect = 0;
        /**
         * Creates a new SettingsMsg instance using the specified properties.
         * @function create
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {settingsProto.ISettingsMsg=} [properties] Properties to set
         * @returns {settingsProto.SettingsMsg} SettingsMsg instance
         */
        SettingsMsg.create = function create(properties) {
            return new SettingsMsg(properties);
        };
        /**
         * Encodes the specified SettingsMsg message. Does not implicitly {@link settingsProto.SettingsMsg.verify|verify} messages.
         * @function encode
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {settingsProto.ISettingsMsg} message SettingsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingsMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.backgroundMusic);
            if (message.soundEffect != null && message.hasOwnProperty("soundEffect"))
                writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.soundEffect);
            return writer;
        };
        /**
         * Encodes the specified SettingsMsg message, length delimited. Does not implicitly {@link settingsProto.SettingsMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {settingsProto.ISettingsMsg} message SettingsMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingsMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a SettingsMsg message from the specified reader or buffer.
         * @function decode
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {settingsProto.SettingsMsg} SettingsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingsMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.settingsProto.SettingsMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.backgroundMusic = reader.int32();
                        break;
                    case 2:
                        message.soundEffect = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a SettingsMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {settingsProto.SettingsMsg} SettingsMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingsMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a SettingsMsg message.
         * @function verify
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettingsMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
                if (!$util.isInteger(message.backgroundMusic))
                    return "backgroundMusic: integer expected";
            if (message.soundEffect != null && message.hasOwnProperty("soundEffect"))
                if (!$util.isInteger(message.soundEffect))
                    return "soundEffect: integer expected";
            return null;
        };
        /**
         * Creates a SettingsMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {settingsProto.SettingsMsg} SettingsMsg
         */
        SettingsMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.settingsProto.SettingsMsg)
                return object;
            var message = new $root.settingsProto.SettingsMsg();
            if (object.backgroundMusic != null)
                message.backgroundMusic = object.backgroundMusic | 0;
            if (object.soundEffect != null)
                message.soundEffect = object.soundEffect | 0;
            return message;
        };
        /**
         * Creates a plain object from a SettingsMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof settingsProto.SettingsMsg
         * @static
         * @param {settingsProto.SettingsMsg} message SettingsMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettingsMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.backgroundMusic = 0;
                object.soundEffect = 0;
            }
            if (message.backgroundMusic != null && message.hasOwnProperty("backgroundMusic"))
                object.backgroundMusic = message.backgroundMusic;
            if (message.soundEffect != null && message.hasOwnProperty("soundEffect"))
                object.soundEffect = message.soundEffect;
            return object;
        };
        /**
         * Converts this SettingsMsg to JSON.
         * @function toJSON
         * @memberof settingsProto.SettingsMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettingsMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return SettingsMsg;
    }();
    return settingsProto;
}();
$root.userProto = function () {
    /**
     * Namespace userProto.
     * @exports userProto
     * @namespace
     */
    var userProto = {};
    userProto.UserMsg = function () {
        /**
         * Properties of a UserMsg.
         * @memberof userProto
         * @interface IUserMsg
         * @property {number|Long|null} [userId] UserMsg userId
         * @property {string|null} [name] UserMsg name
         * @property {string|null} [headImage] UserMsg headImage
         * @property {userProto.Gender|null} [gender] UserMsg gender
         */
        /**
         * Constructs a new UserMsg.
         * @memberof userProto
         * @classdesc 用户信息
         * @implements IUserMsg
         * @constructor
         * @param {userProto.IUserMsg=} [properties] Properties to set
         */
        function UserMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
                }
        }
        /**
         * UserMsg userId.
         * @member {number|Long} userId
         * @memberof userProto.UserMsg
         * @instance
         */
        UserMsg.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        /**
         * UserMsg name.
         * @member {string} name
         * @memberof userProto.UserMsg
         * @instance
         */
        UserMsg.prototype.name = "";
        /**
         * UserMsg headImage.
         * @member {string} headImage
         * @memberof userProto.UserMsg
         * @instance
         */
        UserMsg.prototype.headImage = "";
        /**
         * UserMsg gender.
         * @member {userProto.Gender} gender
         * @memberof userProto.UserMsg
         * @instance
         */
        UserMsg.prototype.gender = 0;
        /**
         * Creates a new UserMsg instance using the specified properties.
         * @function create
         * @memberof userProto.UserMsg
         * @static
         * @param {userProto.IUserMsg=} [properties] Properties to set
         * @returns {userProto.UserMsg} UserMsg instance
         */
        UserMsg.create = function create(properties) {
            return new UserMsg(properties);
        };
        /**
         * Encodes the specified UserMsg message. Does not implicitly {@link userProto.UserMsg.verify|verify} messages.
         * @function encode
         * @memberof userProto.UserMsg
         * @static
         * @param {userProto.IUserMsg} message UserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.userId);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.headImage);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.gender);
            return writer;
        };
        /**
         * Encodes the specified UserMsg message, length delimited. Does not implicitly {@link userProto.UserMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof userProto.UserMsg
         * @static
         * @param {userProto.IUserMsg} message UserMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
        /**
         * Decodes a UserMsg message from the specified reader or buffer.
         * @function decode
         * @memberof userProto.UserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {userProto.UserMsg} UserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.userProto.UserMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.int64();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.headImage = reader.string();
                        break;
                    case 4:
                        message.gender = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };
        /**
         * Decodes a UserMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof userProto.UserMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {userProto.UserMsg} UserMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
        /**
         * Verifies a UserMsg message.
         * @function verify
         * @memberof userProto.UserMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMsg.verify = function verify(message) {
            if ((typeof message === "undefined" ? "undefined" : _typeof(message)) !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                if (!$util.isString(message.headImage))
                    return "headImage: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                switch (message.gender) {
                    default:
                        return "gender: enum value expected";
                    case 0:
                    case 1:
                    case 3:
                        break;
                }
            return null;
        };
        /**
         * Creates a UserMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof userProto.UserMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {userProto.UserMsg} UserMsg
         */
        UserMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.userProto.UserMsg)
                return object;
            var message = new $root.userProto.UserMsg();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (_typeof(object.userId) === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.headImage != null)
                message.headImage = String(object.headImage);
            switch (object.gender) {
                case "FEMALE":
                case 0:
                    message.gender = 0;
                    break;
                case "MALE":
                case 1:
                    message.gender = 1;
                    break;
                case "UNKNOW":
                case 3:
                    message.gender = 3;
                    break;
            }
            return message;
        };
        /**
         * Creates a plain object from a UserMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof userProto.UserMsg
         * @static
         * @param {userProto.UserMsg} message UserMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                }
                else
                    object.userId = options.longs === String ? "0" : 0;
                object.name = "";
                object.headImage = "";
                object.gender = options.enums === String ? "FEMALE" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.headImage != null && message.hasOwnProperty("headImage"))
                object.headImage = message.headImage;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.userProto.Gender[message.gender] : message.gender;
            return object;
        };
        /**
         * Converts this UserMsg to JSON.
         * @function toJSON
         * @memberof userProto.UserMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UserMsg;
    }();
    /**
     * Gender enum.
     * @name userProto.Gender
     * @enum {string}
     * @property {number} FEMALE=0 FEMALE value
     * @property {number} MALE=1 MALE value
     * @property {number} UNKNOW=3 UNKNOW value
     */
    userProto.Gender = function () {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FEMALE"] = 0;
        values[valuesById[1] = "MALE"] = 1;
        values[valuesById[3] = "UNKNOW"] = 3;
        return values;
    }();
    return userProto;
}();
module.exports = $root;
