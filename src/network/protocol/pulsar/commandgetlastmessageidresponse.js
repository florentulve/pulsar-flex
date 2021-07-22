// source: PulsarApi.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.pulsar.proto.CommandGetLastMessageIdResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.pulsar.proto.MessageIdData');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandGetLastMessageIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandGetLastMessageIdResponse.displayName = 'proto.pulsar.proto.CommandGetLastMessageIdResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandGetLastMessageIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lastMessageId: (f = msg.getLastMessageId()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f),
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    consumerMarkDeletePosition: (f = msg.getConsumerMarkDeletePosition()) && proto.pulsar.proto.MessageIdData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandGetLastMessageIdResponse;
  return proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setLastMessageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.setConsumerMarkDeletePosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandGetLastMessageIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandGetLastMessageIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLastMessageId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getConsumerMarkDeletePosition();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
};


/**
 * required MessageIdData last_message_id = 1;
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getLastMessageId = function() {
  return /** @type{!proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 1, 1));
};


/**
 * @param {!proto.pulsar.proto.MessageIdData} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
*/
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setLastMessageId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearLastMessageId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasLastMessageId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessageIdData consumer_mark_delete_position = 3;
 * @return {?proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.getConsumerMarkDeletePosition = function() {
  return /** @type{?proto.pulsar.proto.MessageIdData} */ (
    jspb.Message.getWrapperField(this, proto.pulsar.proto.MessageIdData, 3));
};


/**
 * @param {?proto.pulsar.proto.MessageIdData|undefined} value
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
*/
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.setConsumerMarkDeletePosition = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pulsar.proto.CommandGetLastMessageIdResponse} returns this
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.clearConsumerMarkDeletePosition = function() {
  return this.setConsumerMarkDeletePosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandGetLastMessageIdResponse.prototype.hasConsumerMarkDeletePosition = function() {
  return jspb.Message.getField(this, 3) != null;
};


