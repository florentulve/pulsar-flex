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

goog.provide('proto.pulsar.proto.CommandEndTxnOnPartitionResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.pulsar.proto.ServerError');
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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandEndTxnOnPartitionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandEndTxnOnPartitionResponse.displayName = 'proto.pulsar.proto.CommandEndTxnOnPartitionResponse';
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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandEndTxnOnPartitionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 3, 0),
    error: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandEndTxnOnPartitionResponse;
  return proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 4:
      var value = /** @type {!proto.pulsar.proto.ServerError} */ (reader.readEnum());
      msg.setError(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandEndTxnOnPartitionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * required uint64 request_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 txnid_least_bits = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 txnid_most_bits = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandEndTxnOnPartitionResponse} returns this
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandEndTxnOnPartitionResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


