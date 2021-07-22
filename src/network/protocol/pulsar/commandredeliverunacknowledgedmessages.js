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

goog.provide('proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages');

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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.repeatedFields_, null);
};
goog.inherits(proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.displayName = 'proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.repeatedFields_ = [2];



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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.toObject = function(opt_includeInstance) {
  return proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    messageIdsList: jspb.Message.toObjectList(msg.getMessageIdsList(),
    proto.pulsar.proto.MessageIdData.toObject, includeInstance)
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
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages;
  return proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConsumerId(value);
      break;
    case 2:
      var value = new proto.pulsar.proto.MessageIdData;
      reader.readMessage(value,proto.pulsar.proto.MessageIdData.deserializeBinaryFromReader);
      msg.addMessageIds(value);
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
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMessageIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pulsar.proto.MessageIdData.serializeBinaryToWriter
    );
  }
};


/**
 * required uint64 consumer_id = 1;
 * @return {number}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.getConsumerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.setConsumerId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.clearConsumerId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.hasConsumerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MessageIdData message_ids = 2;
 * @return {!Array<!proto.pulsar.proto.MessageIdData>}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.getMessageIdsList = function() {
  return /** @type{!Array<!proto.pulsar.proto.MessageIdData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pulsar.proto.MessageIdData, 2));
};


/**
 * @param {!Array<!proto.pulsar.proto.MessageIdData>} value
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
*/
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.setMessageIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pulsar.proto.MessageIdData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pulsar.proto.MessageIdData}
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.addMessageIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pulsar.proto.MessageIdData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages} returns this
 */
proto.pulsar.proto.CommandRedeliverUnacknowledgedMessages.prototype.clearMessageIdsList = function() {
  return this.setMessageIdsList([]);
};


