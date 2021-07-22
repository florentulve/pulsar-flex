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

goog.provide('proto.pulsar.proto.CommandPartitionedTopicMetadataResponse');
goog.provide('proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType');

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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulsar.proto.CommandPartitionedTopicMetadataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.displayName = 'proto.pulsar.proto.CommandPartitionedTopicMetadataResponse';
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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitions: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    requestId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    response: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
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
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandPartitionedTopicMetadataResponse;
  return proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPartitions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRequestId(value);
      break;
    case 3:
      var value = /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (reader.readEnum());
      msg.setResponse(value);
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
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
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
  f = /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType = {
  SUCCESS: 0,
  FAILED: 1
};

/**
 * optional uint32 partitions = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getPartitions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setPartitions = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearPartitions = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasPartitions = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required uint64 request_id = 2;
 * @return {number}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setRequestId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearRequestId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasRequestId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LookupType response = 3;
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getResponse = function() {
  return /** @type {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.LookupType} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setResponse = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearResponse = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ServerError error = 4;
 * @return {!proto.pulsar.proto.ServerError}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getError = function() {
  return /** @type {!proto.pulsar.proto.ServerError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pulsar.proto.ServerError} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandPartitionedTopicMetadataResponse} returns this
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandPartitionedTopicMetadataResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};

