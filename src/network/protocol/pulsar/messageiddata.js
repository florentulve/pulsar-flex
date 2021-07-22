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

goog.provide('proto.pulsar.proto.MessageIdData');

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
proto.pulsar.proto.MessageIdData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.MessageIdData.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.MessageIdData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.MessageIdData.displayName = 'proto.pulsar.proto.MessageIdData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.MessageIdData.repeatedFields_ = [5];



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
proto.pulsar.proto.MessageIdData.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.MessageIdData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.MessageIdData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageIdData.toObject = function(includeInstance, msg) {
  var f, obj = {
    ledgerid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    entryid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    partition: jspb.Message.getFieldWithDefault(msg, 3, -1),
    batchIndex: jspb.Message.getFieldWithDefault(msg, 4, -1),
    ackSetList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    batchSize: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.MessageIdData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.MessageIdData;
  return proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.MessageIdData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLedgerid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEntryid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPartition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchIndex(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAckSet(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchSize(value);
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
proto.pulsar.proto.MessageIdData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.MessageIdData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.MessageIdData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.MessageIdData.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAckSetList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * required uint64 ledgerId = 1;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getLedgerid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setLedgerid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearLedgerid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasLedgerid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 entryId = 2;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getEntryid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setEntryid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearEntryid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasEntryid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 partition = 3;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getPartition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, -1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setPartition = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearPartition = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasPartition = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 batch_index = 4;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getBatchIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, -1));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setBatchIndex = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearBatchIndex = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasBatchIndex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated int64 ack_set = 5;
 * @return {!Array<number>}
 */
proto.pulsar.proto.MessageIdData.prototype.getAckSetList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setAckSetList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.addAckSet = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearAckSetList = function() {
  return this.setAckSetList([]);
};


/**
 * optional int32 batch_size = 6;
 * @return {number}
 */
proto.pulsar.proto.MessageIdData.prototype.getBatchSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.setBatchSize = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.MessageIdData} returns this
 */
proto.pulsar.proto.MessageIdData.prototype.clearBatchSize = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.MessageIdData.prototype.hasBatchSize = function() {
  return jspb.Message.getField(this, 6) != null;
};


