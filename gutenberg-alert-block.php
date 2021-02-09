<?php
/*
 * Plugin Name: Gutenberg Alert Block
 * Description: Display alert blocks in Gutenberg editor.
 * Version: 1.0
 * Author: Eric Luong
 * Author URI: http://ericluong.fr/
 * Text Domain: gutenberg-alert-block
 */

if ( ! class_exists( 'Gutenberg_Alert_Block' ) ) {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-gutenberg-alert-block.php';
	Gutenberg_Alert_Block::init();
}

