'use strict';

/**
 * wellness service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wellness.wellness');
