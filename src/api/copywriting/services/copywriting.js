'use strict';

/**
 * copywriting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::copywriting.copywriting');
