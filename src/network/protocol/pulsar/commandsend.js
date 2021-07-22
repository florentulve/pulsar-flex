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

goog.provide('proto.pulsar.proto.CommandSend');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.pulsar.proto.CommandSend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandSend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandSend.displayName = 'proto.pulsar.proto.CommandSend';
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
proto.pulsar.proto.CommandSend.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandSend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandSend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSend.toObject = function(includeInstance, msg) {
  var f, obj = {
    producerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sequenceId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    numMessages: jspb.Message.getFieldWithDefault(msg, 3, 1),
    txnidLeastBits: jspb.Message.getFieldWithDefault(msg, 4, 0),
    txnidMostBits: jspb.Message.getFieldWithDefault(msg, 5, 0),
    highestSequenceId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    isChunk: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.pulsar.proto.CommandSend}
 */
proto.pulsar.proto.CommandSend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandSend;
  return proto.pulsar.proto.CommandSend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandSend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandSend}
 */
proto.pulsar.proto.CommandSend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProducerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumMessages(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidLeastBits(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxnidMostBits(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighestSequenceId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsChunk(value);
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
proto.pulsar.proto.CommandSend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandSend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandSend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandSend.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * required uint64 producer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getProducerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setProducerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearProducerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasProducerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 sequence_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setSequenceId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearSequenceId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasSequenceId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 num_messages = 3;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getNumMessages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setNumMessages = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearNumMessages = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasNumMessages = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 txnid_least_bits = 4;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getTxnidLeastBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setTxnidLeastBits = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearTxnidLeastBits = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasTxnidLeastBits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 txnid_most_bits = 5;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getTxnidMostBits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setTxnidMostBits = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearTxnidMostBits = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasTxnidMostBits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 highest_sequence_id = 6;
 * @return {number}
 */
proto.pulsar.proto.CommandSend.prototype.getHighestSequenceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setHighestSequenceId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearHighestSequenceId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasHighestSequenceId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_chunk = 7;
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.getIsChunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.setIsChunk = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandSend} returns this
 */
proto.pulsar.proto.CommandSend.prototype.clearIsChunk = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandSend.prototype.hasIsChunk = function() {
  return jspb.Message.getField(this, 7) != null;
};

