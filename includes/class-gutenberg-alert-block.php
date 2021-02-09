<?php

class Gutenberg_Alert_Block {
	public function __construct() {
		$this->init();
	}

	public function init() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	public function register_blocks() {
		$asset_file = include( plugin_dir_path( __FILE__ ) . '../build/index.asset.php' );

		wp_register_script(
			'gutenberg-alert-block',
			plugins_url( '../build/index.js', __FILE__ ),
			$asset_file['dependencies'],
			$asset_file['version']
		);

		register_block_type( 'gutenberg-alert-block/info', array(
			'editor_script' => 'gutenberg-alert-block',
		) );
	}
}